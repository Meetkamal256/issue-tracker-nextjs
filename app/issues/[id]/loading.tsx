import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Card } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailPage = () => {
  return (
    <div className="max-w-xl">
      <Skeleton />
      <div className="flex space-x-3 my-2 items-center">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </div>
      <Card className="prose" mt="4">
        <Skeleton count={5} />
      </Card>
    </div>
  );
};

export default LoadingIssueDetailPage;
