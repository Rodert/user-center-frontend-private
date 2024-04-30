import { ProFormText, ProFormTextArea, StepsForm } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Modal } from 'antd';
import React from 'react';

export type FormValueType = {
  userAccount?: string;
  userPassword?: string;
  id?: number;
  avatarUrl?: string;
} & Partial<API.UserListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalOpen: boolean;
  values: Partial<API.UserListItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();
  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{ padding: '32px 40px 48px' }}
            destroyOnClose
            title={intl.formatMessage({
              id: 'pages.searchUserTable.updateForm',
              defaultMessage: '用户信息更新',
            })}
            open={props.updateModalOpen}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
    >
      <StepsForm.StepForm
        initialValues={{
          id: props.values.id,
          userAccount: props.values.userAccount,
          avatarUrl: props.values.avatarUrl,
        }}
        title={intl.formatMessage({
          id: 'pages.searchUserTable.updateForm.basicInfo',
          defaultMessage: '用户基本信息',
        })}
      >
        <ProFormText
          name="id"
          label={intl.formatMessage({
            id: 'pages.searchUserTable.updateForm.userAccount.accountLabel',
            defaultMessage: '用户ID',
          })}
          width="md"
          hidden={true}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchUserTable.updateForm.id.idUser"
                  defaultMessage="请输入用户ID！"
                />
              ),
            },
          ]}
        />
        <ProFormText
          name="userAccount"
          label={intl.formatMessage({
            id: 'pages.searchUserTable.updateForm.userAccount.accountLabel',
            defaultMessage: '用户名称',
          })}
          width="md"
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchUserTable.updateForm.userAccount.accountUser"
                  defaultMessage="请输入用户名称！"
                />
              ),
            },
          ]}
        />
        <ProFormTextArea
          name="avatarUrl"
          width="md"
          label={intl.formatMessage({
            id: 'pages.searchUserTable.updateForm.avatarUrl.avatarUrlLabel',
            defaultMessage: '用户头像',
          })}
          placeholder={intl.formatMessage({
            id: 'pages.searchUserTable.updateForm.avatarUrl.urlUser',
            defaultMessage: '请输入用户头像 url',
          })}
          rules={[
            {
              required: true,
            },
          ]}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
