import { $host } from "../../core/Api";

export const getFeedbacksApi = async () => $host('/api/feedback');
