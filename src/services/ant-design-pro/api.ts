// @ts-ignore
/* eslint-disable */
import {request} from 'umi';

/** 获取当前的用户 GET /api/currentUser */
// export async function currentUser(options?: { [key: string]: any }) {
//   return request<{
//     data: API.CurrentUser;
//   }>('/api/currentUser', {
//     method: 'GET',
//     ...(options || {}),
//   });
// }
export async function currentUser(options?: { [key: string]: any }) {
  return request<Global.BaseResponse<{
    data: API.CurrentUser;
  }>>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Global.BaseResponse<Record<string, any>>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
// export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
//   return request<API.LoginResult>('/api/login/account', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: body,
//     ...(options || {}),
//   });
// }
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<Global.BaseResponse<API.LoginResult>>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<Global.BaseResponse<API.RuleList>>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
// 自定义处理返回结构
// 新的函数，调用rule函数并重新组装返回值
export async function fetchAndTransformRule(params: {
  current?: number;
  pageSize?: number;
}, options?: { [key: string]: any }): Promise<API.RuleList> {
  // 调用原始的rule函数
  const ruleResponse = await rule(params, options);

  // 进行重新组装，这里只是个示例，你需要根据实际情况进行适当的处理
  // return transformedResult;
  return {
    // 这里可以根据需要从原始的ruleResponse中提取数据进行组装
    // 例如：data: ruleResponse.data,
    //       totalCount: ruleResponse.totalCount,
    //       其他属性...

    // 这里假设你要返回整个原始的ruleResponse
    // ...ruleResponse,
    data: ruleResponse.data.data,
    success: ruleResponse.data.success,
    total: ruleResponse.data.total
  }
}


/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
