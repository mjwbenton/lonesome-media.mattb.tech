import Button from "component/Button";
import ContentBlock from "component/ContentBlock";
import Infoline from "component/Infoline";
import MaxWidthWrapper from "component/MaxWidthWrapper";
import React from "react";
import { Clock } from "react-feather";
import { useGithubRepositories } from "./repositoriesDataProvider";

export default function Repositories() {
  const {
    items,
    total,
    hasNextPage,
    loadNextPage,
    loading,
  } = useGithubRepositories();
  if (!items) {
    return null;
  }
  return (
    <MaxWidthWrapper>
      <p className="mb-8">
        <b>{total}</b> total repositories
      </p>
      {items.map((n: any) => (
        <ContentBlock key={n.name}>
          <h2 className="text-lg font-bold">{n.name}</h2>
          {n.description && <p className="mb-4">{n.description}</p>}
          <div className="flex justify-between w-full mb-4 text-xs">
            <div className="text-left">
              Created: <Clock className="inline-block" size={14} />{" "}
              {n.createdAt}
            </div>
            <div className="text-right">
              Last Updated: <Clock className="inline-block" size={14} />{" "}
              {n.updatedAt}
            </div>
          </div>
          <Infoline externalLinkUrl={n.url} externalLinkText="Gh">
            {n.license || "UNLICENSED"}
            {", "}
            {n.primaryLanguage || "UNKNOWN"}
          </Infoline>
        </ContentBlock>
      ))}
      {hasNextPage ? (
        <Button disabled={loading} onClick={loadNextPage}>
          Load More
        </Button>
      ) : null}
    </MaxWidthWrapper>
  );
}
