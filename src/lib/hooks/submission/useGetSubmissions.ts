import { useEffect, useState } from 'react';

import { GetSubmissionsParams } from '@/server/routes/submission/getSubmissions';
import { GetSubmissionDumpParams } from '@/server/routes/submission/submissionDump/getSubmissionDump';

import { trpc } from '../../trpc';

//!Get one

export const useGetSubmissions = (
  config: GetSubmissionsParams,
  enabled = true
) => {
  const page = config.page || 0;

  const [numOfPages, setNumOfPages] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);

  const { data, error, isLoading, isFetching } =
    trpc.submission.getSubmissions.useQuery(config, {
      enabled,
    });

  useEffect(() => {
    if (data && data.count && config.amount) {
      const count = data.count;
      const _numOfPages = Math.floor((count - 1) / config.amount + 1);
      setHasNextPage(_numOfPages - 1 > (config?.page ?? _numOfPages));
      setHasPreviousPage((config?.page ?? 0) != 0);
      setNumOfPages(_numOfPages);
    } else {
      setNumOfPages(0);
    }
  }, [data, config, data?.count]);

  return {
    isLoading,
    submissions: data?.submissions,
    isFetching,
    page,
    numOfPages,
    count: data?.count,
    hasNextPage,
    hasPreviousPage,
    isPreviousData: false,
    error,
  };
};

//!Get Bulk

export const useGetBulkSubmissions = (enabled = true) => {
  const { data, error, isLoading } =
    trpc.submission.getBulkSubmissions.useQuery(
      {},
      {
        enabled,
      }
    );

  return {
    isLoading,
    data,
    error,
  };
};

//!Get Data Dump
export const useGetSubmissionDump = (
  config: GetSubmissionDumpParams,
  enabled = true
) => {
  const page = config.page || 0;

  const [numOfPages, setNumOfPages] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);

  const { data, error, isLoading, isFetching } =
    trpc.submission.getSubmissionDump.useQuery(config, {
      enabled,
    });

  useEffect(() => {
    if (data && data.count && config.amount) {
      const count = data.count;
      const _numOfPages = Math.floor((count - 1) / config.amount + 1);
      setHasNextPage(_numOfPages - 1 > (config?.page ?? _numOfPages));
      setHasPreviousPage((config?.page ?? 0) != 0);
      setNumOfPages(_numOfPages);
    } else {
      setNumOfPages(0);
    }
  }, [data, config, data?.count]);

  return {
    isLoading,
    submissionDump: data?.submissions,
    isFetching,
    page,
    numOfPages,
    count: data?.count,
    hasNextPage,
    hasPreviousPage,
    isPreviousData: false,
    error,
  };
};
