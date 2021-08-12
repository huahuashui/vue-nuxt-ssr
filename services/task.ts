import { NuxtAxiosInstance } from '@nuxtjs/axios';
import {
  TaskReportParams
} from '~/types/params/TaskParams';
import {
  TaskReportData
} from '~/types/result/TaskResult';

// 任务相关-对应后台tssk服务
export const taskService = {
  // 前端用户行为数据上报
  taskReport (axios: NuxtAxiosInstance, params: TaskReportParams): Promise<TaskReportData> {
    return axios.post('/gateway/task/userActionRecord/report', params);
  }
};
