import { GetFormStats, GetForms } from "@/actions/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ReactNode, Suspense } from "react";
import { AiOutlineFundView } from "react-icons/ai";
import { BsSendCheck } from "react-icons/bs";
// import { HiCursorClick } from "react-icons/hi";
// import { TbArrowBounce } from "react-icons/tb";
import { Separator } from "@/components/ui/separator";
import CreateFormBtn from "@/components/CreateFormBtn";
import { Form } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-12" />

      <div className="flex flex-col md:flex-row lg:flex-row gap-6">
        <div className="md:w-3/4 lg:w-3/4">
          {" "}
          <CreateFormBtn />
        </div>
        <div className="md:w-1/4 lg:w-1/4">
          <h2 className="text-4xl font-bold col-span-2 py-6">Your forms</h2>{" "}
          <Suspense
            fallback={[1, 2, 3, 4].map((el) => (
              <FormCardSkeleton key={el} />
            ))}
          >
            <FormCards />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}

interface StatsCardProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

function StatsCards(props: StatsCardProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      <div className="md:col-span-2 lg:col-span-2">
        {" "}
        <h2 className="capitalize font-bold text-2xl sm:text-4xl pt-6 pr-6">
          View your <br /> <span>Forms insight</span>
        </h2>
      </div>
      <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 gap-4">
        {" "}
        <StatsCard
          title="Total visits"
          icon={<AiOutlineFundView className="text-[#ff595a] h-10 w-10" />}
          value={data?.visits.toLocaleString() || ""}
          loading={loading}
          className="shadow-md shadow-gray-600"
        />
        <StatsCard
          title="Total submissions"
          icon={<BsSendCheck className="text-[#ff595a] h-10 w-10" />}
          value={data?.submissions.toLocaleString() || ""}
          loading={loading}
          className="shadow-md shadow-gray-600"
        />
        {/* <StatsCard
          title="Submission rate"
          icon={<HiCursorClick className="text-[#ff595a] h-10 w-10" />}
          value={data?.submissionRate.toLocaleString() + "%" || ""}
          loading={loading}
          className="shadow-md shadow-gray-600"
        />
        <StatsCard
          title="Bounce rate"
          icon={<TbArrowBounce className="text-[#ff595a] h-10 w-10" />}
          value={data?.submissionRate.toLocaleString() + "%" || ""}
          loading={loading}
          className="shadow-md shadow-gray-600"
        /> */}
      </div>
    </div>
  );
}

export function StatsCard({
  title,
  value,
  icon,

  loading,
  className,
}: {
  title: string;
  value: string;
  className: string;
  loading: boolean;
  icon: ReactNode;
}) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
      </CardContent>
    </Card>
  );
}

function FormCardSkeleton() {
  return <Skeleton className="border-2 border-primary-/20 h-[190px] w-full" />;
}

async function FormCards() {
  const forms = await GetForms();
  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
}

function FormCard({ form }: { form: Form }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold">{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && <Badge variant={"destructive"}>Draft</Badge>}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
          {form.published && (
            <span className="flex items-center gap-2">
              <AiOutlineFundView className="text-muted-foreground" />
              <span>{form.visits.toLocaleString()}</span>
              <BsSendCheck className="text-muted-foreground" />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button asChild className="w-full mt-2 text-md gap-4">
            <Link href={`/forms/${form.id}`}>
              View submissions <BiRightArrowAlt />
            </Link>
          </Button>
        )}
        {!form.published && (
          <Button asChild variant={"secondary"} className="w-full mt-2 text-md gap-4">
            <Link href={`/builder/${form.id}`}>
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
