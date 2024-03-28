import { getSubmissions } from '@/server/routes/submission/getSubmissions';

import { router } from '../procedures';
import { canUserSubmit } from '../routes/submission/canUserSubmit';
import { getBulkSubmissions } from '../routes/submission/getBulkSubmissions';
import { getSubmission } from '../routes/submission/getSubmission';
import { getSubmitterInfo } from '../routes/submission/getSubmitterInfo';
import { postSubmission } from '../routes/submission/postSubmission';
import { getSubmissionDump } from '../routes/submission/submissionDump/getSubmissionDump';

export const submissionRouter = router({
  post: postSubmission,
  getSubmissions: getSubmissions,
  getBulkSubmissions: getBulkSubmissions,
  getSubmission: getSubmission,
  getSubmitterInfo: getSubmitterInfo,
  canUserSubmit: canUserSubmit,
  getSubmissionDump: getSubmissionDump,
});
