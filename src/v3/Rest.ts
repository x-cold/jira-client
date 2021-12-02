/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  ActorInputBean,
  ActorsMap,
  AddFieldBean,
  AddGroupBean,
  ApplicationProperty,
  ApplicationRole,
  AssociateFieldConfigurationsWithIssueTypesRequest,
  Attachment,
  AttachmentArchiveImpl,
  AttachmentArchiveMetadataReadable,
  AttachmentMetadata,
  AttachmentSettings,
  AuditRecords,
  AutoCompleteSuggestions,
  Avatar,
  Avatars,
  BulkCustomFieldOptionCreateRequest,
  BulkCustomFieldOptionUpdateRequest,
  BulkIssuePropertyUpdateRequest,
  BulkPermissionGrants,
  BulkPermissionsRequestBean,
  ChangedWorklogs,
  ColumnItem,
  Comment,
  ComponentIssuesCount,
  Configuration,
  ConnectCustomFieldValues,
  ConnectModules,
  ContainerForProjectFeatures,
  ContainerForRegisteredWebhooks,
  ContainerForWebhookIDs,
  ContainerOfWorkflowSchemeAssociations,
  ConvertedJQLQueries,
  CreateCustomFieldContext,
  CreatedIssue,
  CreatedIssues,
  CreateProjectDetails,
  CreateUpdateRoleRequestBean,
  CreateWorkflowDetails,
  CustomFieldConfigurations,
  CustomFieldContextDefaultValueUpdate,
  CustomFieldContextUpdateDetails,
  CustomFieldCreatedContextOptionsList,
  CustomFieldDefinitionJsonBean,
  CustomFieldOption,
  CustomFieldUpdatedContextOptionsList,
  CustomFieldValueUpdateDetails,
  Dashboard,
  DashboardDetails,
  DefaultShareScope,
  DefaultWorkflow,
  DeleteAndReplaceVersionBean,
  DeprecatedWorkflow,
  EntityProperty,
  EntityPropertyDetails,
  ErrorCollection,
  ErrorMessage,
  FailedWebhooks,
  FieldConfiguration,
  FieldConfigurationDetails,
  FieldConfigurationItemsDetails,
  FieldConfigurationScheme,
  FieldConfigurationSchemeProjectAssociation,
  FieldDetails,
  Filter,
  FoundGroups,
  FoundUsers,
  FoundUsersAndGroups,
  Group,
  GroupName,
  IdBean,
  IssueBean,
  IssueChangelogIds,
  IssueCommentListRequestBean,
  IssueCreateMetadata,
  IssueEntityProperties,
  IssueEvent,
  IssueFieldOption,
  IssueFieldOptionCreateBean,
  IssueFilterForBulkPropertyDelete,
  IssueLink,
  IssueLinkType,
  IssueLinkTypes,
  IssueMatches,
  IssuePickerSuggestions,
  IssuesAndJQLQueries,
  IssuesUpdateBean,
  IssueTypeCreateBean,
  IssueTypeDetails,
  IssueTypeIds,
  IssueTypeSchemeDetails,
  IssueTypeSchemeID,
  IssueTypeSchemeProjectAssociation,
  IssueTypeSchemeUpdateDetails,
  IssueTypeScreenSchemeDetails,
  IssueTypeScreenSchemeId,
  IssueTypeScreenSchemeMappingDetails,
  IssueTypeScreenSchemeProjectAssociation,
  IssueTypeScreenSchemeUpdateDetails,
  IssueTypesWorkflowMapping,
  IssueTypeUpdateBean,
  IssueTypeWithStatus,
  IssueTypeWorkflowMapping,
  IssueUpdateDetails,
  IssueUpdateMetadata,
  JiraExpressionEvalRequestBean,
  JiraExpressionForAnalysis,
  JiraExpressionResult,
  JiraExpressionsAnalysis,
  JQLPersonalDataMigrationRequest,
  JqlQueriesToParse,
  JQLReferenceData,
  License,
  LinkIssueRequestJsonBean,
  ListWrapperCallbackApplicationRole,
  Locale,
  MoveFieldBean,
  MultipleCustomFieldValuesUpdateDetails,
  NewUserDetails,
  Notification,
  NotificationScheme,
  OperationMessage,
  OrderOfCustomFieldOptions,
  OrderOfIssueTypes,
  PageBeanChangelog,
  PageBeanComment,
  PageBeanComponentWithIssueCount,
  PageBeanContext,
  PageBeanContextForProjectAndIssueType,
  PageBeanContextualConfiguration,
  PageBeanCustomFieldContext,
  PageBeanCustomFieldContextDefaultValue,
  PageBeanCustomFieldContextOption,
  PageBeanCustomFieldContextProjectMapping,
  PageBeanDashboard,
  PageBeanField,
  PageBeanFieldConfigurationDetails,
  PageBeanFieldConfigurationIssueTypeItem,
  PageBeanFieldConfigurationItem,
  PageBeanFieldConfigurationScheme,
  PageBeanFieldConfigurationSchemeProjects,
  PageBeanFilterDetails,
  PageBeanGroupDetails,
  PageBeanIssueFieldOption,
  PageBeanIssueSecurityLevelMember,
  PageBeanIssueTypeScheme,
  PageBeanIssueTypeSchemeMapping,
  PageBeanIssueTypeSchemeProjects,
  PageBeanIssueTypeScreenScheme,
  PageBeanIssueTypeScreenSchemeItem,
  PageBeanIssueTypeScreenSchemesProjects,
  PageBeanIssueTypeToContextMapping,
  PageBeanNotificationScheme,
  PageBeanProject,
  PageBeanProjectDetails,
  PageBeanScreen,
  PageBeanScreenScheme,
  PageBeanScreenWithTab,
  PageBeanString,
  PageBeanUser,
  PageBeanUserDetails,
  PageBeanUserKey,
  PageBeanVersion,
  PageBeanWebhook,
  PageBeanWorkflow,
  PageBeanWorkflowScheme,
  PageBeanWorkflowTransitionRules,
  PageOfChangelogs,
  PageOfComments,
  PageOfDashboards,
  PageOfWorklogs,
  ParsedJqlQueries,
  PermissionGrant,
  PermissionGrants,
  Permissions,
  PermissionScheme,
  PermissionSchemes,
  PermissionsKeysBean,
  PermittedProjects,
  Priority,
  Project,
  ProjectAvatars,
  ProjectCategory,
  ProjectComponent,
  ProjectEmailAddress,
  ProjectFeatureState,
  ProjectIdentifiers,
  ProjectIds,
  ProjectIssueSecurityLevels,
  ProjectIssueTypeHierarchy,
  ProjectIssueTypeMappings,
  ProjectRole,
  ProjectRoleActorsUpdateBean,
  ProjectRoleDetails,
  ProjectType,
  PropertyKeys,
  PublishDraftWorkflowScheme,
  RemoteIssueLink,
  RemoteIssueLinkIdentifies,
  RemoteIssueLinkRequest,
  Resolution,
  Screen,
  ScreenableField,
  ScreenableTab,
  ScreenDetails,
  ScreenSchemeDetails,
  ScreenSchemeId,
  SearchAutoCompleteFilter,
  SearchRequestBean,
  SearchResults,
  SecurityLevel,
  SecurityScheme,
  SecuritySchemes,
  ServerInformation,
  SharePermission,
  SharePermissionInputBean,
  SimpleApplicationPropertyBean,
  StatusCategory,
  StatusDetails,
  StringList,
  SystemAvatars,
  TaskProgressBeanObject,
  TaskProgressBeanRemoveOptionFromIssuesResult,
  TimeTrackingConfiguration,
  TimeTrackingProvider,
  Transitions,
  UnrestrictedUserEmail,
  UpdateCustomFieldDetails,
  UpdateDefaultScreenScheme,
  UpdatedProjectCategory,
  UpdateFieldConfigurationSchemeDetails,
  UpdateProjectDetails,
  UpdateScreenDetails,
  UpdateScreenSchemeDetails,
  UpdateUserToGroupBean,
  User,
  UserMigrationBean,
  Version,
  VersionIssueCounts,
  VersionMoveBean,
  VersionUnresolvedIssuesCount,
  Votes,
  Watchers,
  WebhookRegistrationDetails,
  WebhooksExpirationDate,
  WorkflowIDs,
  WorkflowRulesSearch,
  WorkflowRulesSearchDetails,
  WorkflowScheme,
  WorkflowSchemeProjectAssociation,
  WorkflowsWithTransitionRulesDetails,
  WorkflowTransitionProperty,
  WorkflowTransitionRulesUpdate,
  WorkflowTransitionRulesUpdateErrors,
  Worklog,
  WorklogIdsRequestBean,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Rest<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Updates the value of one or more custom fields on one or more issues. Combinations of custom field and issue should be unique within the request. Custom fields can only be updated by the Forge app that created them. **[Permissions](#permissions) required:** Only the app that created the custom field can update its values with this operation.
   *
   * @tags Issue custom field values (apps)
   * @name UpdateMultipleCustomFieldValues
   * @summary Update custom fields
   * @request POST:/rest/api/2/app/field/value
   * @secure
   */
  updateMultipleCustomFieldValues = (
    data: MultipleCustomFieldValuesUpdateDetails,
    query?: { generateChangelog?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/app/field/value`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of configurations for a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/). The result can be filtered by one of these criteria: *  `contextId`. *  `issueId`. *  `projectKeyOrId` and `issueTypeId`. Otherwise, all configurations are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field.
   *
   * @tags Issue custom field configuration (apps)
   * @name GetCustomFieldConfiguration
   * @summary Get custom field configurations
   * @request GET:/rest/api/2/app/field/{fieldIdOrKey}/context/configuration
   * @secure
   */
  getCustomFieldConfiguration = (
    fieldIdOrKey: string,
    query?: {
      contextId?: number[];
      issueId?: number;
      projectKeyOrId?: string;
      issueTypeId?: string;
      startAt?: number;
      maxResults?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanContextualConfiguration, void>({
      path: `/rest/api/2/app/field/${fieldIdOrKey}/context/configuration`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Update the configuration for contexts of a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field.
   *
   * @tags Issue custom field configuration (apps)
   * @name UpdateCustomFieldConfiguration
   * @summary Update custom field configurations
   * @request PUT:/rest/api/2/app/field/{fieldIdOrKey}/context/configuration
   * @secure
   */
  updateCustomFieldConfiguration = (
    fieldIdOrKey: string,
    data: CustomFieldConfigurations,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/app/field/${fieldIdOrKey}/context/configuration`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates the value of a custom field on one or more issues. Custom fields can only be updated by the Forge app that created them. **[Permissions](#permissions) required:** Only the app that created the custom field can update its values with this operation.
   *
   * @tags Issue custom field values (apps)
   * @name UpdateCustomFieldValue
   * @summary Update custom field value
   * @request PUT:/rest/api/2/app/field/{fieldIdOrKey}/value
   * @secure
   */
  updateCustomFieldValue = (
    fieldIdOrKey: string,
    data: CustomFieldValueUpdateDetails,
    query?: { generateChangelog?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/app/field/${fieldIdOrKey}/value`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all application properties or an application property. If you specify a value for the `key` parameter, then an application property is returned as an object (not in an array). Otherwise, an array of all editable application properties is returned. See [Set application property](#api-rest-api-2-application-properties-id-put) for descriptions of editable properties. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Jira settings
   * @name GetApplicationProperty
   * @summary Get application property
   * @request GET:/rest/api/2/application-properties
   * @secure
   */
  getApplicationProperty = (
    query?: { key?: string; permissionLevel?: string; keyFilter?: string },
    params: RequestParams = {},
  ) =>
    this.request<ApplicationProperty[], void>({
      path: `/rest/api/2/application-properties`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the application properties that are accessible on the *Advanced Settings* page. To navigate to the *Advanced Settings* page in Jira, choose the Jira icon > **Jira settings** > **System**, **General Configuration** and then click **Advanced Settings** (in the upper right). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Jira settings
   * @name GetAdvancedSettings
   * @summary Get advanced settings
   * @request GET:/rest/api/2/application-properties/advanced-settings
   * @secure
   */
  getAdvancedSettings = (params: RequestParams = {}) =>
    this.request<ApplicationProperty[], void>({
      path: `/rest/api/2/application-properties/advanced-settings`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Changes the value of an application property. For example, you can change the value of the `jira.clone.prefix` from its default value of *CLONE -* to *Clone -* if you prefer sentence case capitalization. Editable properties are described below along with their default values. #### Advanced settings #### The advanced settings below are also accessible in [Jira](https://confluence.atlassian.com/x/vYXKM). | Key | Description | Default value | | -- | -- | -- | | `jira.clone.prefix` | The string of text prefixed to the title of a cloned issue. | `CLONE -` | | `jira.date.picker.java.format` | The date format for the Java (server-side) generated dates. This must be the same as the `jira.date.picker.javascript.format` format setting. | `d/MMM/yy` | | `jira.date.picker.javascript.format` | The date format for the JavaScript (client-side) generated dates. This must be the same as the `jira.date.picker.java.format` format setting. | `%e/%b/%y` | | `jira.date.time.picker.java.format` | The date format for the Java (server-side) generated date times. This must be the same as the `jira.date.time.picker.javascript.format` format setting. | `dd/MMM/yy h:mm a` | | `jira.date.time.picker.javascript.format` | The date format for the JavaScript (client-side) generated date times. This must be the same as the `jira.date.time.picker.java.format` format setting. | `%e/%b/%y %I:%M %p` | | `jira.issue.actions.order` | The default order of actions (such as *Comments* or *Change history*) displayed on the issue view. | `asc` | | `jira.table.cols.subtasks` | The columns to show while viewing subtask issues in a table. For example, a list of subtasks on an issue. | `issuetype, status, assignee, progress` | | `jira.view.issue.links.sort.order` | The sort order of the list of issue links on the issue view. | `type, status, priority` | | `jira.comment.collapsing.minimum.hidden` | The minimum number of comments required for comment collapsing to occur. A value of `0` disables comment collapsing. | `4` | | `jira.newsletter.tip.delay.days` | The number of days before a prompt to sign up to the Jira Insiders newsletter is shown. A value of `-1` disables this feature. | `7` | #### Look and feel #### The settings listed below adjust the [look and feel](https://confluence.atlassian.com/x/VwCLLg). | Key | Description | Default value | | -- | -- | -- | | `jira.lf.date.time` | The [ time format](https://docs.oracle.com/javase/6/docs/api/index.html?java/text/SimpleDateFormat.html). | `h:mm a` | | `jira.lf.date.day` | The [ day format](https://docs.oracle.com/javase/6/docs/api/index.html?java/text/SimpleDateFormat.html). | `EEEE h:mm a` | | `jira.lf.date.complete` | The [ date and time format](https://docs.oracle.com/javase/6/docs/api/index.html?java/text/SimpleDateFormat.html). | `dd/MMM/yy h:mm a` | | `jira.lf.date.dmy` | The [ date format](https://docs.oracle.com/javase/6/docs/api/index.html?java/text/SimpleDateFormat.html). | `dd/MMM/yy` | | `jira.date.time.picker.use.iso8061` | When enabled, sets Monday as the first day of the week in the date picker, as specified by the ISO8601 standard. | `false` | | `jira.lf.logo.url` | The URL of the logo image file. | `/images/icon-jira-logo.png` | | `jira.lf.logo.show.application.title` | Controls the visibility of the application title on the sidebar. | `false` | | `jira.lf.favicon.url` | The URL of the favicon. | `/favicon.ico` | | `jira.lf.favicon.hires.url` | The URL of the high-resolution favicon. | `/images/64jira.png` | | `jira.lf.navigation.bgcolour` | The background color of the sidebar. | `#0747A6` | | `jira.lf.navigation.highlightcolour` | The color of the text and logo of the sidebar. | `#DEEBFF` | | `jira.lf.hero.button.base.bg.colour` | The background color of the hero button. | `#3b7fc4` | | `jira.title` | The text for the application title. The application title can also be set in *General settings*. | `Jira` | | `jira.option.globalsharing` | Whether filters and dashboards can be shared with anyone signed into Jira. | `true` | | `xflow.product.suggestions.enabled` | Whether to expose product suggestions for other Atlassian products within Jira. | `true` | #### Other settings #### | Key | Description | Default value | | -- | -- | -- | | `jira.issuenav.criteria.autoupdate` | Whether instant updates to search criteria is active. | `true` | *Note: Be careful when changing [application properties and advanced settings](https://confluence.atlassian.com/x/vYXKM).* **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Jira settings
   * @name SetApplicationProperty
   * @summary Set application property
   * @request PUT:/rest/api/2/application-properties/{id}
   * @secure
   */
  setApplicationProperty = (id: string, data: SimpleApplicationPropertyBean, params: RequestParams = {}) =>
    this.request<ApplicationProperty, void>({
      path: `/rest/api/2/application-properties/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all application roles. In Jira, application roles are managed using the [Application access configuration](https://confluence.atlassian.com/x/3YxjL) page. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Application roles
   * @name GetAllApplicationRoles
   * @summary Get all application roles
   * @request GET:/rest/api/2/applicationrole
   * @secure
   */
  getAllApplicationRoles = (params: RequestParams = {}) =>
    this.request<ApplicationRole[], void>({
      path: `/rest/api/2/applicationrole`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns an application role. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Application roles
   * @name GetApplicationRole
   * @summary Get application role
   * @request GET:/rest/api/2/applicationrole/{key}
   * @secure
   */
  getApplicationRole = (key: string, params: RequestParams = {}) =>
    this.request<ApplicationRole, void>({
      path: `/rest/api/2/applicationrole/${key}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the contents of an attachment. A `Range` header can be set to define a range of bytes within the attachment to download. See the [HTTP Range header standard](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) for details. To return a thumbnail of the attachment, use [Download attachment thumbnail](#api-rest-api-2-attachment-thumbnail-id-get). This operation can be accessed anonymously. **[Permissions](#permissions) required:** For the issue containing the attachment: *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue attachments
   * @name GetAttachmentContent
   * @summary Get attachment content
   * @request GET:/rest/api/2/attachment/content/{id}
   * @secure
   */
  getAttachmentContent = (id: string, query?: { redirect?: boolean }, params: RequestParams = {}) =>
    this.request<ListWrapperCallbackApplicationRole, void>({
      path: `/rest/api/2/attachment/content/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed. Note that there are also [project permissions](https://confluence.atlassian.com/x/yodKLg) that restrict whether users can create and delete attachments. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Issue attachments
   * @name GetAttachmentMeta
   * @summary Get Jira attachment settings
   * @request GET:/rest/api/2/attachment/meta
   * @secure
   */
  getAttachmentMeta = (params: RequestParams = {}) =>
    this.request<AttachmentSettings, void>({
      path: `/rest/api/2/attachment/meta`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the thumbnail of an attachment. To return the attachment contents, use [Download attachment content](#api-rest-api-2-attachment-content-id-get). This operation can be accessed anonymously. **[Permissions](#permissions) required:** For the issue containing the attachment: *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue attachments
   * @name GetAttachmentThumbnail
   * @summary Get attachment thumbnail
   * @request GET:/rest/api/2/attachment/thumbnail/{id}
   * @secure
   */
  getAttachmentThumbnail = (
    id: string,
    query?: { redirect?: boolean; fallbackToDefault?: boolean; width?: number; height?: number },
    params: RequestParams = {},
  ) =>
    this.request<ListWrapperCallbackApplicationRole, void>({
      path: `/rest/api/2/attachment/thumbnail/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the metadata for an attachment. Note that the attachment itself is not returned. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue attachments
   * @name GetAttachment
   * @summary Get attachment metadata
   * @request GET:/rest/api/2/attachment/{id}
   * @secure
   */
  getAttachment = (id: string, params: RequestParams = {}) =>
    this.request<AttachmentMetadata, void>({
      path: `/rest/api/2/attachment/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an attachment from an issue. This operation can be accessed anonymously. **[Permissions](#permissions) required:** For the project holding the issue containing the attachment: *  *Delete own attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment created by the calling user. *  *Delete all attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment created by any user.
   *
   * @tags Issue attachments
   * @name RemoveAttachment
   * @summary Delete attachment
   * @request DELETE:/rest/api/2/attachment/{id}
   * @secure
   */
  removeAttachment = (id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/attachment/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported. Use this operation to retrieve data that is presented to the user, as this operation returns the metadata for the attachment itself, such as the attachment's ID and name. Otherwise, use [ Get contents metadata for an expanded attachment](#api-rest-api-2-attachment-id-expand-raw-get), which only returns the metadata for the attachment's contents. This operation can be accessed anonymously. **[Permissions](#permissions) required:** For the issue containing the attachment: *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue attachments
   * @name ExpandAttachmentForHumans
   * @summary Get all metadata for an expanded attachment
   * @request GET:/rest/api/2/attachment/{id}/expand/human
   * @secure
   */
  expandAttachmentForHumans = (id: string, params: RequestParams = {}) =>
    this.request<AttachmentArchiveMetadataReadable, void>({
      path: `/rest/api/2/attachment/${id}/expand/human`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported. Use this operation if you are processing the data without presenting it to the user, as this operation only returns the metadata for the contents of the attachment. Otherwise, to retrieve data to present to the user, use [ Get all metadata for an expanded attachment](#api-rest-api-2-attachment-id-expand-human-get) which also returns the metadata for the attachment itself, such as the attachment's ID and name. This operation can be accessed anonymously. **[Permissions](#permissions) required:** For the issue containing the attachment: *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue attachments
   * @name ExpandAttachmentForMachines
   * @summary Get contents metadata for an expanded attachment
   * @request GET:/rest/api/2/attachment/{id}/expand/raw
   * @secure
   */
  expandAttachmentForMachines = (id: string, params: RequestParams = {}) =>
    this.request<AttachmentArchiveImpl, void>({
      path: `/rest/api/2/attachment/${id}/expand/raw`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of audit records. The list can be filtered to include items: *  where each item in `filter` has at least one match in any of these fields: *  `summary` *  `category` *  `eventSource` *  `objectItem.name` If the object is a user, account ID is available to filter. *  `objectItem.parentName` *  `objectItem.typeName` *  `changedValues.changedFrom` *  `changedValues.changedTo` *  `remoteAddress` For example, if `filter` contains *man ed*, an audit record containing `summary": "User added to group"` and `"category": "group management"` is returned. *  created on or after a date and time. *  created or or before a date and time. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Audit records
   * @name GetAuditRecords
   * @summary Get audit records
   * @request GET:/rest/api/2/auditing/record
   * @secure
   */
  getAuditRecords = (
    query?: { offset?: number; limit?: number; filter?: string; from?: string; to?: string },
    params: RequestParams = {},
  ) =>
    this.request<AuditRecords, void>({
      path: `/rest/api/2/auditing/record`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Avatars
   * @name GetAllSystemAvatars
   * @summary Get system avatars by type
   * @request GET:/rest/api/2/avatar/{type}/system
   * @secure
   */
  getAllSystemAvatars = (type: 'issuetype' | 'project' | 'user', params: RequestParams = {}) =>
    this.request<SystemAvatars, void>({
      path: `/rest/api/2/avatar/${type}/system`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of comments specified by a list of comment IDs. This operation can be accessed anonymously. **[Permissions](#permissions) required:** Comments are returned where the user: *  has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue comments
   * @name GetCommentsByIds
   * @summary Get comments by IDs
   * @request POST:/rest/api/2/comment/list
   * @secure
   */
  getCommentsByIds = (data: IssueCommentListRequestBean, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<PageBeanComment, void>({
      path: `/rest/api/2/comment/list`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the keys of all the properties of a comment. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue comment properties
   * @name GetCommentPropertyKeys
   * @summary Get comment property keys
   * @request GET:/rest/api/2/comment/{commentId}/properties
   * @secure
   */
  getCommentPropertyKeys = (commentId: string, params: RequestParams = {}) =>
    this.request<PropertyKeys, void>({
      path: `/rest/api/2/comment/${commentId}/properties`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the value of a comment property. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue comment properties
   * @name GetCommentProperty
   * @summary Get comment property
   * @request GET:/rest/api/2/comment/{commentId}/properties/{propertyKey}
   * @secure
   */
  getCommentProperty = (commentId: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<EntityProperty, void>({
      path: `/rest/api/2/comment/${commentId}/properties/${propertyKey}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment. The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters. **[Permissions](#permissions) required:** either of: *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on any comment. *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on a comment created by the user. Also, when the visibility of a comment is restricted to a role or group the user must be a member of that role or group.
   *
   * @tags Issue comment properties
   * @name SetCommentProperty
   * @summary Set comment property
   * @request PUT:/rest/api/2/comment/{commentId}/properties/{propertyKey}
   * @secure
   */
  setCommentProperty = (commentId: string, propertyKey: string, data: any, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/comment/${commentId}/properties/${propertyKey}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a comment property. **[Permissions](#permissions) required:** either of: *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from any comment. *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from a comment created by the user. Also, when the visibility of a comment is restricted to a role or group the user must be a member of that role or group.
   *
   * @tags Issue comment properties
   * @name DeleteCommentProperty
   * @summary Delete comment property
   * @request DELETE:/rest/api/2/comment/{commentId}/properties/{propertyKey}
   * @secure
   */
  deleteCommentProperty = (commentId: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/comment/${commentId}/properties/${propertyKey}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Creates a component. Use components to provide containers for issues within a project. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the component is created or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project components
   * @name CreateComponent
   * @summary Create component
   * @request POST:/rest/api/2/component
   * @secure
   */
  createComponent = (data: ProjectComponent, params: RequestParams = {}) =>
    this.request<ProjectComponent, void>({
      path: `/rest/api/2/component`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a component. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for project containing the component.
   *
   * @tags Project components
   * @name GetComponent
   * @summary Get component
   * @request GET:/rest/api/2/component/{id}
   * @secure
   */
  getComponent = (id: string, params: RequestParams = {}) =>
    this.request<ProjectComponent, void>({
      path: `/rest/api/2/component/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a component. Any fields included in the request are overwritten. If `leadAccountId` is an empty string ("") the component lead is removed. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project components
   * @name UpdateComponent
   * @summary Update component
   * @request PUT:/rest/api/2/component/{id}
   * @secure
   */
  updateComponent = (id: string, data: ProjectComponent, params: RequestParams = {}) =>
    this.request<ProjectComponent, void>({
      path: `/rest/api/2/component/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a component. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project components
   * @name DeleteComponent
   * @summary Delete component
   * @request DELETE:/rest/api/2/component/{id}
   * @secure
   */
  deleteComponent = (id: string, query?: { moveIssuesTo?: string }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/component/${id}`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns the counts of issues assigned to the component. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Project components
   * @name GetComponentRelatedIssues
   * @summary Get component issues count
   * @request GET:/rest/api/2/component/{id}/relatedIssueCounts
   * @secure
   */
  getComponentRelatedIssues = (id: string, params: RequestParams = {}) =>
    this.request<ComponentIssuesCount, void>({
      path: `/rest/api/2/component/${id}/relatedIssueCounts`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the [global settings](https://confluence.atlassian.com/x/qYXKM) in Jira. These settings determine whether optional features (for example, subtasks, time tracking, and others) are enabled. If time tracking is enabled, this operation also returns the time tracking configuration. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Jira settings
   * @name GetConfiguration
   * @summary Get global settings
   * @request GET:/rest/api/2/configuration
   * @secure
   */
  getConfiguration = (params: RequestParams = {}) =>
    this.request<Configuration, void>({
      path: `/rest/api/2/configuration`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Time tracking
   * @name GetSelectedTimeTrackingImplementation
   * @summary Get selected time tracking provider
   * @request GET:/rest/api/2/configuration/timetracking
   * @secure
   */
  getSelectedTimeTrackingImplementation = (params: RequestParams = {}) =>
    this.request<TimeTrackingProvider, void>({
      path: `/rest/api/2/configuration/timetracking`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Selects a time tracking provider. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Time tracking
   * @name SelectTimeTrackingImplementation
   * @summary Select time tracking provider
   * @request PUT:/rest/api/2/configuration/timetracking
   * @secure
   */
  selectTimeTrackingImplementation = (data: TimeTrackingProvider, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/configuration/timetracking`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all time tracking providers. By default, Jira only has one time tracking provider: *JIRA provided time tracking*. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the [ Time Tracking Provider](https://developer.atlassian.com/cloud/jira/platform/modules/time-tracking-provider/) module. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Time tracking
   * @name GetAvailableTimeTrackingImplementations
   * @summary Get all time tracking providers
   * @request GET:/rest/api/2/configuration/timetracking/list
   * @secure
   */
  getAvailableTimeTrackingImplementations = (params: RequestParams = {}) =>
    this.request<TimeTrackingProvider[], void>({
      path: `/rest/api/2/configuration/timetracking/list`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Time tracking
   * @name GetSharedTimeTrackingConfiguration
   * @summary Get time tracking settings
   * @request GET:/rest/api/2/configuration/timetracking/options
   * @secure
   */
  getSharedTimeTrackingConfiguration = (params: RequestParams = {}) =>
    this.request<TimeTrackingConfiguration, void>({
      path: `/rest/api/2/configuration/timetracking/options`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the time tracking settings. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Time tracking
   * @name SetSharedTimeTrackingConfiguration
   * @summary Set time tracking settings
   * @request PUT:/rest/api/2/configuration/timetracking/options
   * @secure
   */
  setSharedTimeTrackingConfiguration = (data: TimeTrackingConfiguration, params: RequestParams = {}) =>
    this.request<TimeTrackingConfiguration, void>({
      path: `/rest/api/2/configuration/timetracking/options`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a custom field option. For example, an option in a select list. Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect apps. This operation can be accessed anonymously. **[Permissions](#permissions) required:** The custom field option is returned as follows: *  if the user has the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). *  if the user has the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the custom field is used in, and the field is visible in at least one layout the user has permission to view.
   *
   * @tags Issue custom field options
   * @name GetCustomFieldOption
   * @summary Get custom field option
   * @request GET:/rest/api/2/customFieldOption/{id}
   * @secure
   */
  getCustomFieldOption = (id: string, params: RequestParams = {}) =>
    this.request<CustomFieldOption, void>({
      path: `/rest/api/2/customFieldOption/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Dashboards
   * @name GetAllDashboards
   * @summary Get all dashboards
   * @request GET:/rest/api/2/dashboard
   * @secure
   */
  getAllDashboards = (
    query?: { filter?: 'my' | 'favourite'; startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageOfDashboards, ErrorCollection>({
      path: `/rest/api/2/dashboard`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a dashboard. **[Permissions](#permissions) required:** None.
   *
   * @tags Dashboards
   * @name CreateDashboard
   * @summary Create dashboard
   * @request POST:/rest/api/2/dashboard
   * @secure
   */
  createDashboard = (data: DashboardDetails, params: RequestParams = {}) =>
    this.request<Dashboard, ErrorCollection>({
      path: `/rest/api/2/dashboard`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of dashboards. This operation is similar to [Get dashboards](#api-rest-api-2-dashboard-get) except that the results can be refined to include dashboards that have specific attributes. For example, dashboards with a particular name. When multiple attributes are specified only filters matching all attributes are returned. This operation can be accessed anonymously. **[Permissions](#permissions) required:** The following dashboards that match the query parameters are returned: *  Dashboards owned by the user. Not returned for anonymous users. *  Dashboards shared with a group that the user is a member of. Not returned for anonymous users. *  Dashboards shared with a private project that the user can browse. Not returned for anonymous users. *  Dashboards shared with a public project. *  Dashboards shared with the public.
   *
   * @tags Dashboards
   * @name GetDashboardsPaginated
   * @summary Search for dashboards
   * @request GET:/rest/api/2/dashboard/search
   * @secure
   */
  getDashboardsPaginated = (
    query?: {
      dashboardName?: string;
      accountId?: string;
      owner?: string;
      groupname?: string;
      projectId?: number;
      orderBy?:
        | 'description'
        | '-description'
        | '+description'
        | 'favorite_count'
        | '-favorite_count'
        | '+favorite_count'
        | 'id'
        | '-id'
        | '+id'
        | 'is_favorite'
        | '-is_favorite'
        | '+is_favorite'
        | 'name'
        | '-name'
        | '+name'
        | 'owner'
        | '-owner'
        | '+owner';
      startAt?: number;
      maxResults?: number;
      expand?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanDashboard, ErrorCollection>({
      path: `/rest/api/2/dashboard/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the keys of all properties for a dashboard item. This operation can be accessed anonymously. **[Permissions](#permissions) required:** The user must be the owner of the dashboard or have the dashboard shared with them. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard. The System dashboard is considered to be shared with all other users, and is accessible to anonymous users when Jira’s anonymous access is permitted.
   *
   * @tags Dashboards
   * @name GetDashboardItemPropertyKeys
   * @summary Get dashboard item property keys
   * @request GET:/rest/api/2/dashboard/{dashboardId}/items/{itemId}/properties
   * @secure
   */
  getDashboardItemPropertyKeys = (dashboardId: string, itemId: string, params: RequestParams = {}) =>
    this.request<PropertyKeys, void>({
      path: `/rest/api/2/dashboard/${dashboardId}/items/${itemId}/properties`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the key and value of a dashboard item property. A dashboard item enables an app to add user-specific information to a user dashboard. Dashboard items are exposed to users as gadgets that users can add to their dashboards. For more information on how users do this, see [Adding and customizing gadgets](https://confluence.atlassian.com/x/7AeiLQ). When an app creates a dashboard item it registers a callback to receive the dashboard item ID. The callback fires whenever the item is rendered or, where the item is configurable, the user edits the item. The app then uses this resource to store the item's content or configuration details. For more information on working with dashboard items, see [ Building a dashboard item for a JIRA Connect add-on](https://developer.atlassian.com/server/jira/platform/guide-building-a-dashboard-item-for-a-jira-connect-add-on-33746254/) and the [Dashboard Item](https://developer.atlassian.com/cloud/jira/platform/modules/dashboard-item/) documentation. There is no resource to set or get dashboard items. This operation can be accessed anonymously. **[Permissions](#permissions) required:** The user must be the owner of the dashboard or have the dashboard shared with them. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard. The System dashboard is considered to be shared with all other users, and is accessible to anonymous users when Jira’s anonymous access is permitted.
   *
   * @tags Dashboards
   * @name GetDashboardItemProperty
   * @summary Get dashboard item property
   * @request GET:/rest/api/2/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}
   * @secure
   */
  getDashboardItemProperty = (dashboardId: string, itemId: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<EntityProperty, void>({
      path: `/rest/api/2/dashboard/${dashboardId}/items/${itemId}/properties/${propertyKey}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item. A dashboard item enables an app to add user-specific information to a user dashboard. Dashboard items are exposed to users as gadgets that users can add to their dashboards. For more information on how users do this, see [Adding and customizing gadgets](https://confluence.atlassian.com/x/7AeiLQ). When an app creates a dashboard item it registers a callback to receive the dashboard item ID. The callback fires whenever the item is rendered or, where the item is configurable, the user edits the item. The app then uses this resource to store the item's content or configuration details. For more information on working with dashboard items, see [ Building a dashboard item for a JIRA Connect add-on](https://developer.atlassian.com/server/jira/platform/guide-building-a-dashboard-item-for-a-jira-connect-add-on-33746254/) and the [Dashboard Item](https://developer.atlassian.com/cloud/jira/platform/modules/dashboard-item/) documentation. There is no resource to set or get dashboard items. The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters. This operation can be accessed anonymously. **[Permissions](#permissions) required:** The user must be the owner of the dashboard. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard.
   *
   * @tags Dashboards
   * @name SetDashboardItemProperty
   * @summary Set dashboard item property
   * @request PUT:/rest/api/2/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}
   * @secure
   */
  setDashboardItemProperty = (
    dashboardId: string,
    itemId: string,
    propertyKey: string,
    data: any,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/dashboard/${dashboardId}/items/${itemId}/properties/${propertyKey}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a dashboard item property. This operation can be accessed anonymously. **[Permissions](#permissions) required:** The user must be the owner of the dashboard. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard.
   *
   * @tags Dashboards
   * @name DeleteDashboardItemProperty
   * @summary Delete dashboard item property
   * @request DELETE:/rest/api/2/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}
   * @secure
   */
  deleteDashboardItemProperty = (
    dashboardId: string,
    itemId: string,
    propertyKey: string,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/rest/api/2/dashboard/${dashboardId}/items/${itemId}/properties/${propertyKey}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns a dashboard. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None. However, to get a dashboard, the dashboard must be shared with the user or the user must own it. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard. The System dashboard is considered to be shared with all other users.
   *
   * @tags Dashboards
   * @name GetDashboard
   * @summary Get dashboard
   * @request GET:/rest/api/2/dashboard/{id}
   * @secure
   */
  getDashboard = (id: string, params: RequestParams = {}) =>
    this.request<Dashboard, ErrorCollection | void>({
      path: `/rest/api/2/dashboard/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a dashboard, replacing all the dashboard details with those provided. **[Permissions](#permissions) required:** None The dashboard to be updated must be owned by the user.
   *
   * @tags Dashboards
   * @name UpdateDashboard
   * @summary Update dashboard
   * @request PUT:/rest/api/2/dashboard/{id}
   * @secure
   */
  updateDashboard = (id: string, data: DashboardDetails, params: RequestParams = {}) =>
    this.request<Dashboard, ErrorCollection>({
      path: `/rest/api/2/dashboard/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a dashboard. **[Permissions](#permissions) required:** None The dashboard to be deleted must be owned by the user.
   *
   * @tags Dashboards
   * @name DeleteDashboard
   * @summary Delete dashboard
   * @request DELETE:/rest/api/2/dashboard/{id}
   * @secure
   */
  deleteDashboard = (id: string, params: RequestParams = {}) =>
    this.request<void, ErrorCollection>({
      path: `/rest/api/2/dashboard/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Copies a dashboard. Any values provided in the `dashboard` parameter replace those in the copied dashboard. **[Permissions](#permissions) required:** None The dashboard to be copied must be owned by or shared with the user.
   *
   * @tags Dashboards
   * @name CopyDashboard
   * @summary Copy dashboard
   * @request POST:/rest/api/2/dashboard/{id}/copy
   * @secure
   */
  copyDashboard = (id: string, data: DashboardDetails, params: RequestParams = {}) =>
    this.request<Dashboard, ErrorCollection>({
      path: `/rest/api/2/dashboard/${id}/copy`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all issue events. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issues
   * @name GetEvents
   * @summary Get events
   * @request GET:/rest/api/2/events
   * @secure
   */
  getEvents = (params: RequestParams = {}) =>
    this.request<IssueEvent[], void>({
      path: `/rest/api/2/events`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Analyses and validates Jira expressions. As an experimental feature, this operation can also attempt to type-check the expressions. Learn more about Jira expressions in the [documentation](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/). **[Permissions](#permissions) required**: None.
   *
   * @tags Jira expressions
   * @name AnalyseExpression
   * @summary Analyse Jira expression
   * @request POST:/rest/api/2/expression/analyse
   * @secure
   */
  analyseExpression = (
    data: JiraExpressionForAnalysis,
    query?: { check?: 'syntax' | 'type' | 'complexity' },
    params: RequestParams = {},
  ) =>
    this.request<JiraExpressionsAnalysis, ErrorCollection | void>({
      path: `/rest/api/2/expression/analyse`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Evaluates a Jira expression and returns its value. This resource can be used to test Jira expressions that you plan to use elsewhere, or to fetch data in a flexible way. Consult the [Jira expressions documentation](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/) for more details. #### Context variables #### The following context variables are available to Jira expressions evaluated by this resource. Their presence depends on various factors; usually you need to manually request them in the context object sent in the payload, but some of them are added automatically under certain conditions. *  `user` ([User](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user)): The current user. Always available and equal to `null` if the request is anonymous. *  `app` ([App](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#app)): The [Connect app](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) that made the request. Available only for authenticated requests made by Connect Apps (read more here: [Authentication for Connect apps](https://developer.atlassian.com/cloud/jira/platform/security-for-connect-apps/)). *  `issue` ([Issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue)): The current issue. Available only when the issue is provided in the request context object. *  `issues` ([List](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#list) of [Issues](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue)): A collection of issues matching a JQL query. Available only when JQL is provided in the request context object. *  `project` ([Project](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#project)): The current project. Available only when the project is provided in the request context object. *  `sprint` ([Sprint](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#sprint)): The current sprint. Available only when the sprint is provided in the request context object. *  `board` ([Board](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#board)): The current board. Available only when the board is provided in the request context object. *  `serviceDesk` ([ServiceDesk](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#servicedesk)): The current service desk. Available only when the service desk is provided in the request context object. *  `customerRequest` ([CustomerRequest](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#customerrequest)): The current customer request. Available only when the customer request is provided in the request context object. Also, custom context variables can be passed in the request with their types. Those variables can be accessed by key in the Jira expression. These variable types are available for use in a custom context: *  `user`: A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID. *  `issue`: An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression. *  `json`: A JSON object with custom content. *  `list`: A JSON list of `user`, `issue`, or `json` variable types. This operation can be accessed anonymously. **[Permissions](#permissions) required**: None. However, an expression may return different results for different users depending on their permissions. For example, different users may see different comments on the same issue. Permission to access Jira Software is required to access Jira Software context variables (`board` and `sprint`) or fields (for example, `issue.sprint`).
   *
   * @tags Jira expressions
   * @name EvaluateJiraExpression
   * @summary Evaluate Jira expression
   * @request POST:/rest/api/2/expression/eval
   * @secure
   */
  evaluateJiraExpression = (
    data: JiraExpressionEvalRequestBean,
    query?: { expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<JiraExpressionResult, ErrorCollection | void>({
      path: `/rest/api/2/expression/eval`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns system and custom issue fields according to the following rules: *  Fields that cannot be added to the issue navigator are always returned. *  Fields that cannot be placed on an issue screen are always returned. *  Fields that depend on global Jira settings are only returned if the setting is enabled. That is, timetracking fields, subtasks, votes, and watches. *  For all other fields, this operation only returns the fields that the user has permission to view (that is, the field is used in at least one project that the user has *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.) This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Issue fields
   * @name GetFields
   * @summary Get fields
   * @request GET:/rest/api/2/field
   * @secure
   */
  getFields = (params: RequestParams = {}) =>
    this.request<FieldDetails[], void>({
      path: `/rest/api/2/field`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a custom field. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue fields
   * @name CreateCustomField
   * @summary Create custom field
   * @request POST:/rest/api/2/field
   * @secure
   */
  createCustomField = (data: CustomFieldDefinitionJsonBean, params: RequestParams = {}) =>
    this.request<FieldDetails, void>({
      path: `/rest/api/2/field`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of fields for Classic Jira projects. The list can include: *  all fields. *  specific fields, by defining `id`. *  fields that contain a string in the field name or description, by defining `query`. *  specific fields that contain a string in the field name or description, by defining `id` and `query`. Only custom fields can be queried, `type` must be set to `custom`. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue fields
   * @name GetFieldsPaginated
   * @summary Get fields paginated
   * @request GET:/rest/api/2/field/search
   * @secure
   */
  getFieldsPaginated = (
    query?: {
      startAt?: number;
      maxResults?: number;
      type?: ('custom' | 'system')[];
      id?: string[];
      query?: string;
      orderBy?:
        | 'contextsCount'
        | '-contextsCount'
        | '+contextsCount'
        | 'lastUsed'
        | '-lastUsed'
        | '+lastUsed'
        | 'name'
        | '-name'
        | '+name'
        | 'screensCount'
        | '-screensCount'
        | '+screensCount';
      expand?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanField, ErrorCollection | void>({
      path: `/rest/api/2/field/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a custom field. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue fields
   * @name UpdateCustomField
   * @summary Update custom field
   * @request PUT:/rest/api/2/field/{fieldId}
   * @secure
   */
  updateCustomField = (fieldId: string, data: UpdateCustomFieldDetails, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/field/${fieldId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of [ contexts](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html) for a custom field. Contexts can be returned as follows: *  With no other parameters set, all contexts. *  By defining `id` only, all contexts from the list of IDs. *  By defining `isAnyIssueType`, limit the list of contexts returned to either those that apply to all issue types (true) or those that apply to only a subset of issue types (false) *  By defining `isGlobalContext`, limit the list of contexts return to either those that apply to all projects (global contexts) (true) or those that apply to only a subset of projects (false). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name GetContextsForField
   * @summary Get custom field contexts
   * @request GET:/rest/api/2/field/{fieldId}/context
   * @secure
   */
  getContextsForField = (
    fieldId: string,
    query?: {
      isAnyIssueType?: boolean;
      isGlobalContext?: boolean;
      contextId?: number[];
      startAt?: number;
      maxResults?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanCustomFieldContext, void>({
      path: `/rest/api/2/field/${fieldId}/context`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a custom field context. If `projectIds` is empty, a global context is created. A global context is one that applies to all project. If `issueTypeIds` is empty, the context applies to all issue types. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name CreateCustomFieldContext
   * @summary Create custom field context
   * @request POST:/rest/api/2/field/{fieldId}/context
   * @secure
   */
  createCustomFieldContext = (fieldId: string, data: CreateCustomFieldContext, params: RequestParams = {}) =>
    this.request<CreateCustomFieldContext, void>({
      path: `/rest/api/2/field/${fieldId}/context`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of defaults for a custom field. The results can be filtered by `contextId`, otherwise all values are returned. If no defaults are set for a context, nothing is returned. The returned object depends on type of the custom field: *  `CustomFieldContextDefaultValueDate` (type `datepicker`) for date fields. *  `CustomFieldContextDefaultValueDateTime` (type `datetimepicker`) for date-time fields. *  `CustomFieldContextDefaultValueSingleOption` (type `option.single`) for single choice select lists and radio buttons. *  `CustomFieldContextDefaultValueMultipleOption` (type `option.multiple`) for multiple choice select lists and checkboxes. *  `CustomFieldContextDefaultValueCascadingOption` (type `option.cascading`) for cascading select lists. *  `CustomFieldContextSingleUserPickerDefaults` (type `single.user.select`) for single users. *  `CustomFieldContextDefaultValueMultiUserPicker` (type `multi.user.select`) for user lists. *  `CustomFieldContextDefaultValueSingleGroupPicker` (type `grouppicker.single`) for single choice group picker. *  `CustomFieldContextDefaultValueMultipleGroupPicker` (type `grouppicker.multiple`) for multiple choice group picker. *  `CustomFieldContextDefaultValueURL` (type `url`) for URL. *  `CustomFieldContextDefaultValueProject` (type `project`) for project picker. *  `CustomFieldContextDefaultValueFloat` (type `float`) for float (a floating-point number). *  `CustomFieldContextDefaultValueLabels` (type `labels`) for labels. *  `CustomFieldContextDefaultValueTextField` (type `textfield`) for text field. *  `CustomFieldContextDefaultValueTextArea` (type `textarea`) for text area field. *  `CustomFieldContextDefaultValueReadOnly` (type `readonly`) for read only (text) field. *  `CustomFieldContextDefaultValueMultipleVersion` (type `version.multiple`) for single choice version picker. *  `CustomFieldContextDefaultValueSingleVersion` (type `version.single`) for multiple choice version picker. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name GetDefaultValues
   * @summary Get custom field contexts default values
   * @request GET:/rest/api/2/field/{fieldId}/context/defaultValue
   * @secure
   */
  getDefaultValues = (
    fieldId: string,
    query?: { contextId?: number[]; startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanCustomFieldContextDefaultValue, void>({
      path: `/rest/api/2/field/${fieldId}/context/defaultValue`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets default for contexts of a custom field. Default are defined using these objects: *  `CustomFieldContextDefaultValueDate` (type `datepicker`) for date fields. *  `CustomFieldContextDefaultValueDateTime` (type `datetimepicker`) for date-time fields. *  `CustomFieldContextDefaultValueSingleOption` (type `option.single`) for single choice select lists and radio buttons. *  `CustomFieldContextDefaultValueMultipleOption` (type `option.multiple`) for multiple choice select lists and checkboxes. *  `CustomFieldContextDefaultValueCascadingOption` (type `option.cascading`) for cascading select lists. *  `CustomFieldContextSingleUserPickerDefaults` (type `single.user.select`) for single users. *  `CustomFieldContextDefaultValueMultiUserPicker` (type `multi.user.select`) for user lists. *  `CustomFieldContextDefaultValueSingleGroupPicker` (type `grouppicker.single`) for single choice group picker. *  `CustomFieldContextDefaultValueMultipleGroupPicker` (type `grouppicker.multiple`) for multiple choice group picker. *  `CustomFieldContextDefaultValueURL` (type `url`) for URL. *  `CustomFieldContextDefaultValueProject` (type `project`) for project picker. *  `CustomFieldContextDefaultValueFloat` (type `float`) for float (a floating-point number). *  `CustomFieldContextDefaultValueLabels` (type `labels`) for labels. *  `CustomFieldContextDefaultValueTextField` (type `textfield`) for text field. *  `CustomFieldContextDefaultValueTextArea` (type `textarea`) for text area field. *  `CustomFieldContextDefaultValueReadOnly` (type `readonly`) for read only (text) field. *  `CustomFieldContextDefaultValueMultipleVersion` (type `version.multiple`) for single choice version picker. *  `CustomFieldContextDefaultValueSingleVersion` (type `version.single`) for multiple choice version picker. Only one type of default object can be included in a request. To remove a default for a context, set the default parameter to `null`. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name SetDefaultValues
   * @summary Set custom field contexts default values
   * @request PUT:/rest/api/2/field/{fieldId}/context/defaultValue
   * @secure
   */
  setDefaultValues = (fieldId: string, data: CustomFieldContextDefaultValueUpdate, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/field/${fieldId}/context/defaultValue`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of context to issue type mappings for a custom field. Mappings are returned for all contexts or a list of contexts. Mappings are ordered first by context ID and then by issue type ID. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name GetIssueTypeMappingsForContexts
   * @summary Get issue types for custom field context
   * @request GET:/rest/api/2/field/{fieldId}/context/issuetypemapping
   * @secure
   */
  getIssueTypeMappingsForContexts = (
    fieldId: string,
    query?: { contextId?: number[]; startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanIssueTypeToContextMapping, void>({
      path: `/rest/api/2/field/${fieldId}/context/issuetypemapping`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of project and issue type mappings and, for each mapping, the ID of a [custom field context](https://confluence.atlassian.com/x/k44fOw) that applies to the project and issue type. If there is no custom field context assigned to the project then, if present, the custom field context that applies to all projects is returned if it also applies to the issue type or all issue types. If a custom field context is not found, the returned custom field context ID is `null`. Duplicate project and issue type mappings cannot be provided in the request. The order of the returned values is the same as provided in the request. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name GetCustomFieldContextsForProjectsAndIssueTypes
   * @summary Get custom field contexts for projects and issue types
   * @request POST:/rest/api/2/field/{fieldId}/context/mapping
   * @secure
   */
  getCustomFieldContextsForProjectsAndIssueTypes = (
    fieldId: string,
    data: ProjectIssueTypeMappings,
    query?: { startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanContextForProjectAndIssueType, void>({
      path: `/rest/api/2/field/${fieldId}/context/mapping`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of context to project mappings for a custom field. The result can be filtered by `contextId`. Otherwise, all mappings are returned. Invalid IDs are ignored. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name GetProjectContextMapping
   * @summary Get project mappings for custom field context
   * @request GET:/rest/api/2/field/{fieldId}/context/projectmapping
   * @secure
   */
  getProjectContextMapping = (
    fieldId: string,
    query?: { contextId?: number[]; startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanCustomFieldContextProjectMapping, void>({
      path: `/rest/api/2/field/${fieldId}/context/projectmapping`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a [ custom field context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name UpdateCustomFieldContext
   * @summary Update custom field context
   * @request PUT:/rest/api/2/field/{fieldId}/context/{contextId}
   * @secure
   */
  updateCustomFieldContext = (
    fieldId: string,
    contextId: number,
    data: CustomFieldContextUpdateDetails,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/field/${fieldId}/context/${contextId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a [ custom field context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name DeleteCustomFieldContext
   * @summary Delete custom field context
   * @request DELETE:/rest/api/2/field/{fieldId}/context/{contextId}
   * @secure
   */
  deleteCustomFieldContext = (fieldId: string, contextId: number, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/field/${fieldId}/context/${contextId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds issue types to a custom field context, appending the issue types to the issue types list. A custom field context without any issue types applies to all issue types. Adding issue types to such a custom field context would result in it applying to only the listed issue types. If any of the issue types exists in the custom field context, the operation fails and no issue types are added. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name AddIssueTypesToContext
   * @summary Add issue types to context
   * @request PUT:/rest/api/2/field/{fieldId}/context/{contextId}/issuetype
   * @secure
   */
  addIssueTypesToContext = (fieldId: string, contextId: number, data: IssueTypeIds, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/field/${fieldId}/context/${contextId}/issuetype`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Removes issue types from a custom field context. A custom field context without any issue types applies to all issue types. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name RemoveIssueTypesFromContext
   * @summary Remove issue types from context
   * @request POST:/rest/api/2/field/{fieldId}/context/{contextId}/issuetype/remove
   * @secure
   */
  removeIssueTypesFromContext = (fieldId: string, contextId: number, data: IssueTypeIds, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/field/${fieldId}/context/${contextId}/issuetype/remove`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of all custom field option for a context. Options are returned first then cascading options, in the order they display in Jira. This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.** **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field options
   * @name GetOptionsForContext
   * @summary Get custom field options (context)
   * @request GET:/rest/api/2/field/{fieldId}/context/{contextId}/option
   * @secure
   */
  getOptionsForContext = (
    fieldId: string,
    contextId: number,
    query?: { optionId?: number; onlyOptions?: boolean; startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanCustomFieldContextOption, void>({
      path: `/rest/api/2/field/${fieldId}/context/${contextId}/option`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates the options of a custom field. If any of the options are not found, no options are updated. Options where the values in the request match the current values aren't updated and aren't reported in the response. Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect apps. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field options
   * @name UpdateCustomFieldOption
   * @summary Update custom field options (context)
   * @request PUT:/rest/api/2/field/{fieldId}/context/{contextId}/option
   * @secure
   */
  updateCustomFieldOption = (
    fieldId: string,
    contextId: number,
    data: BulkCustomFieldOptionUpdateRequest,
    params: RequestParams = {},
  ) =>
    this.request<CustomFieldUpdatedContextOptionsList, void>({
      path: `/rest/api/2/field/${fieldId}/context/${contextId}/option`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates options and, where the custom select field is of the type Select List (cascading), cascading options for a custom select field. The options are added to a context of the field. The maximum number of options that can be created per request is 1000 and each field can have a maximum of 10000 options. This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.** **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field options
   * @name CreateCustomFieldOption
   * @summary Create custom field options (context)
   * @request POST:/rest/api/2/field/{fieldId}/context/{contextId}/option
   * @secure
   */
  createCustomFieldOption = (
    fieldId: string,
    contextId: number,
    data: BulkCustomFieldOptionCreateRequest,
    params: RequestParams = {},
  ) =>
    this.request<CustomFieldCreatedContextOptionsList, void>({
      path: `/rest/api/2/field/${fieldId}/context/${contextId}/option`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Changes the order of custom field options or cascading options in a context. This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.** **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field options
   * @name ReorderCustomFieldOptions
   * @summary Reorder custom field options (context)
   * @request PUT:/rest/api/2/field/{fieldId}/context/{contextId}/option/move
   * @secure
   */
  reorderCustomFieldOptions = (
    fieldId: string,
    contextId: number,
    data: OrderOfCustomFieldOptions,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/field/${fieldId}/context/${contextId}/option/move`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a custom field option. Options with cascading options cannot be deleted without deleting the cascading options first. This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.** **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field options
   * @name DeleteCustomFieldOption
   * @summary Delete custom field options (context)
   * @request DELETE:/rest/api/2/field/{fieldId}/context/{contextId}/option/{optionId}
   * @secure
   */
  deleteCustomFieldOption = (fieldId: string, contextId: number, optionId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/field/${fieldId}/context/${contextId}/option/${optionId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Assigns a custom field context to projects. If any project in the request is assigned to any context of the custom field, the operation fails. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name AssignProjectsToCustomFieldContext
   * @summary Assign custom field context to projects
   * @request PUT:/rest/api/2/field/{fieldId}/context/{contextId}/project
   * @secure
   */
  assignProjectsToCustomFieldContext = (
    fieldId: string,
    contextId: number,
    data: ProjectIds,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/field/${fieldId}/context/${contextId}/project`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Removes a custom field context from projects. A custom field context without any projects applies to all projects. Removing all projects from a custom field context would result in it applying to all projects. If any project in the request is not assigned to the context, or the operation would result in two global contexts for the field, the operation fails. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue custom field contexts
   * @name RemoveCustomFieldContextFromProjects
   * @summary Remove custom field context from projects
   * @request POST:/rest/api/2/field/{fieldId}/context/{contextId}/project/remove
   * @secure
   */
  removeCustomFieldContextFromProjects = (
    fieldId: string,
    contextId: number,
    data: ProjectIds,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/field/${fieldId}/context/${contextId}/project/remove`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of the contexts a field is used in. Deprecated, use [ Get custom field contexts](#api-rest-api-2-field-fieldId-context-get). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue fields
   * @name GetContextsForFieldDeprecated
   * @summary Get contexts for a field
   * @request GET:/rest/api/2/field/{fieldId}/contexts
   * @deprecated
   * @secure
   */
  getContextsForFieldDeprecated = (
    fieldId: string,
    query?: { startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanContext, void>({
      path: `/rest/api/2/field/${fieldId}/contexts`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of the screens a field is used in. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screens
   * @name GetScreensForField
   * @summary Get screens for a field
   * @request GET:/rest/api/2/field/{fieldId}/screens
   * @secure
   */
  getScreensForField = (
    fieldId: string,
    query?: { startAt?: number; maxResults?: number; expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanScreenWithTab, void>({
      path: `/rest/api/2/field/${fieldId}/screens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of all the options of a select list issue field. A select list issue field is a type of [issue field](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field/) that enables a user to select a value from a list of options. Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   *
   * @tags Issue custom field options (apps)
   * @name GetAllIssueFieldOptions
   * @summary Get all issue field options
   * @request GET:/rest/api/2/field/{fieldKey}/option
   * @secure
   */
  getAllIssueFieldOptions = (
    fieldKey: string,
    query?: { startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanIssueFieldOption, void>({
      path: `/rest/api/2/field/${fieldKey}/option`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates an option for a select list issue field. Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   *
   * @tags Issue custom field options (apps)
   * @name CreateIssueFieldOption
   * @summary Create issue field option
   * @request POST:/rest/api/2/field/{fieldKey}/option
   * @secure
   */
  createIssueFieldOption = (fieldKey: string, data: IssueFieldOptionCreateBean, params: RequestParams = {}) =>
    this.request<IssueFieldOption, void>({
      path: `/rest/api/2/field/${fieldKey}/option`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of options for a select list issue field that can be viewed and selected by the user. Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Issue custom field options (apps)
   * @name GetSelectableIssueFieldOptions
   * @summary Get selectable issue field options
   * @request GET:/rest/api/2/field/{fieldKey}/option/suggestions/edit
   * @secure
   */
  getSelectableIssueFieldOptions = (
    fieldKey: string,
    query?: { startAt?: number; maxResults?: number; projectId?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanIssueFieldOption, void>({
      path: `/rest/api/2/field/${fieldKey}/option/suggestions/edit`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of options for a select list issue field that can be viewed by the user. Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Issue custom field options (apps)
   * @name GetVisibleIssueFieldOptions
   * @summary Get visible issue field options
   * @request GET:/rest/api/2/field/{fieldKey}/option/suggestions/search
   * @secure
   */
  getVisibleIssueFieldOptions = (
    fieldKey: string,
    query?: { startAt?: number; maxResults?: number; projectId?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanIssueFieldOption, void>({
      path: `/rest/api/2/field/${fieldKey}/option/suggestions/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns an option from a select list issue field. Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   *
   * @tags Issue custom field options (apps)
   * @name GetIssueFieldOption
   * @summary Get issue field option
   * @request GET:/rest/api/2/field/{fieldKey}/option/{optionId}
   * @secure
   */
  getIssueFieldOption = (fieldKey: string, optionId: number, params: RequestParams = {}) =>
    this.request<IssueFieldOption, void>({
      path: `/rest/api/2/field/${fieldKey}/option/${optionId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates or creates an option for a select list issue field. This operation requires that the option ID is provided when creating an option, therefore, the option ID needs to be specified as a path and body parameter. The option ID provided in the path and body must be identical. Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   *
   * @tags Issue custom field options (apps)
   * @name UpdateIssueFieldOption
   * @summary Update issue field option
   * @request PUT:/rest/api/2/field/{fieldKey}/option/{optionId}
   * @secure
   */
  updateIssueFieldOption = (fieldKey: string, optionId: number, data: IssueFieldOption, params: RequestParams = {}) =>
    this.request<IssueFieldOption, void>({
      path: `/rest/api/2/field/${fieldKey}/option/${optionId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an option from a select list issue field. Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   *
   * @tags Issue custom field options (apps)
   * @name DeleteIssueFieldOption
   * @summary Delete issue field option
   * @request DELETE:/rest/api/2/field/{fieldKey}/option/{optionId}
   * @secure
   */
  deleteIssueFieldOption = (fieldKey: string, optionId: number, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/field/${fieldKey}/option/${optionId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deselects an issue-field select-list option from all issues where it is selected. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query. Connect app users with admin permissions (from user permissions and app scopes) and Forge app users with the `manage:jira-configuration` scope can override the screen security configuration using `overrideScreenSecurity` and `overrideEditableFlag`. This is an [asynchronous operation](#async). The response object contains a link to the long-running task. Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   *
   * @tags Issue custom field options (apps)
   * @name ReplaceIssueFieldOption
   * @summary Replace issue field option
   * @request DELETE:/rest/api/2/field/{fieldKey}/option/{optionId}/issue
   * @secure
   */
  replaceIssueFieldOption = (
    fieldKey: string,
    optionId: number,
    query?: { replaceWith?: number; jql?: string; overrideScreenSecurity?: boolean; overrideEditableFlag?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<any, TaskProgressBeanRemoveOptionFromIssuesResult | void>({
      path: `/rest/api/2/field/${fieldKey}/option/${optionId}/issue`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Deletes a custom field. The custom field is deleted whether it is in the trash or not. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields. This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue fields
   * @name DeleteCustomField
   * @summary Delete custom field
   * @request DELETE:/rest/api/2/field/{id}
   * @secure
   */
  deleteCustomField = (id: string, params: RequestParams = {}) =>
    this.request<any, ErrorCollection>({
      path: `/rest/api/2/field/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Restores a custom field from trash. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue fields
   * @name RestoreCustomField
   * @summary Restore custom field from trash
   * @request POST:/rest/api/2/field/{id}/restore
   * @secure
   */
  restoreCustomField = (id: string, params: RequestParams = {}) =>
    this.request<any, ErrorCollection>({
      path: `/rest/api/2/field/${id}/restore`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Moves a custom field to trash. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue fields
   * @name TrashCustomField
   * @summary Move custom field to trash
   * @request POST:/rest/api/2/field/{id}/trash
   * @secure
   */
  trashCustomField = (id: string, params: RequestParams = {}) =>
    this.request<any, ErrorCollection>({
      path: `/rest/api/2/field/${id}/trash`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of field configurations. The list can be for all field configurations or a subset determined by any combination of these criteria: *  a list of field configuration item IDs. *  whether the field configuration is a default. *  whether the field configuration name or description contains a query string. Only field configurations used in company-managed (classic) projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name GetAllFieldConfigurations
   * @summary Get all field configurations
   * @request GET:/rest/api/2/fieldconfiguration
   * @secure
   */
  getAllFieldConfigurations = (
    query?: { startAt?: number; maxResults?: number; id?: number[]; isDefault?: boolean; query?: string },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanFieldConfigurationDetails, void>({
      path: `/rest/api/2/fieldconfiguration`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a field configuration. The field configuration is created with the same field properties as the default configuration, with all the fields being optional. This operation can only create configurations for use in company-managed (classic) projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name CreateFieldConfiguration
   * @summary Create field configuration
   * @request POST:/rest/api/2/fieldconfiguration
   * @secure
   */
  createFieldConfiguration = (data: FieldConfigurationDetails, params: RequestParams = {}) =>
    this.request<FieldConfiguration, void>({
      path: `/rest/api/2/fieldconfiguration`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a field configuration. The name and the description provided in the request override the existing values. This operation can only update configurations used in company-managed (classic) projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name UpdateFieldConfiguration
   * @summary Update field configuration
   * @request PUT:/rest/api/2/fieldconfiguration/{id}
   * @secure
   */
  updateFieldConfiguration = (id: number, data: FieldConfigurationDetails, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/fieldconfiguration/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a field configuration. This operation can only delete configurations used in company-managed (classic) projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name DeleteFieldConfiguration
   * @summary Delete field configuration
   * @request DELETE:/rest/api/2/fieldconfiguration/{id}
   * @secure
   */
  deleteFieldConfiguration = (id: number, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/fieldconfiguration/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of all fields for a configuration. Only the fields from configurations used in company-managed (classic) projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name GetFieldConfigurationItems
   * @summary Get field configuration items
   * @request GET:/rest/api/2/fieldconfiguration/{id}/fields
   * @secure
   */
  getFieldConfigurationItems = (
    id: number,
    query?: { startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanFieldConfigurationItem, void>({
      path: `/rest/api/2/fieldconfiguration/${id}/fields`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates fields in a field configuration. The properties of the field configuration fields provided override the existing values. This operation can only update field configurations used in company-managed (classic) projects. The operation can set the renderer for text fields to the default text renderer (`text-renderer`) or wiki style renderer (`wiki-renderer`). However, the renderer cannot be updated for fields using the autocomplete renderer (`autocomplete-renderer`). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name UpdateFieldConfigurationItems
   * @summary Update field configuration items
   * @request PUT:/rest/api/2/fieldconfiguration/{id}/fields
   * @secure
   */
  updateFieldConfigurationItems = (id: number, data: FieldConfigurationItemsDetails, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/fieldconfiguration/${id}/fields`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of field configuration schemes. Only field configuration schemes used in classic projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name GetAllFieldConfigurationSchemes
   * @summary Get all field configuration schemes
   * @request GET:/rest/api/2/fieldconfigurationscheme
   * @secure
   */
  getAllFieldConfigurationSchemes = (
    query?: { startAt?: number; maxResults?: number; id?: number[] },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanFieldConfigurationScheme, void>({
      path: `/rest/api/2/fieldconfigurationscheme`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a field configuration scheme. This operation can only create field configuration schemes used in company-managed (classic) projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name CreateFieldConfigurationScheme
   * @summary Create field configuration scheme
   * @request POST:/rest/api/2/fieldconfigurationscheme
   * @secure
   */
  createFieldConfigurationScheme = (data: UpdateFieldConfigurationSchemeDetails, params: RequestParams = {}) =>
    this.request<FieldConfigurationScheme, void>({
      path: `/rest/api/2/fieldconfigurationscheme`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of field configuration issue type items. Only items used in classic projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name GetFieldConfigurationSchemeMappings
   * @summary Get field configuration issue type items
   * @request GET:/rest/api/2/fieldconfigurationscheme/mapping
   * @secure
   */
  getFieldConfigurationSchemeMappings = (
    query?: { startAt?: number; maxResults?: number; fieldConfigurationSchemeId?: number[] },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanFieldConfigurationIssueTypeItem, void>({
      path: `/rest/api/2/fieldconfigurationscheme/mapping`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of field configuration schemes and, for each scheme, a list of the projects that use it. The list is sorted by field configuration scheme ID. The first item contains the list of project IDs assigned to the default field configuration scheme. Only field configuration schemes used in classic projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name GetFieldConfigurationSchemeProjectMapping
   * @summary Get field configuration schemes for projects
   * @request GET:/rest/api/2/fieldconfigurationscheme/project
   * @secure
   */
  getFieldConfigurationSchemeProjectMapping = (
    query: { startAt?: number; maxResults?: number; projectId: number[] },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanFieldConfigurationSchemeProjects, void>({
      path: `/rest/api/2/fieldconfigurationscheme/project`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Assigns a field configuration scheme to a project. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme. Field configuration schemes can only be assigned to classic projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name AssignFieldConfigurationSchemeToProject
   * @summary Assign field configuration scheme to project
   * @request PUT:/rest/api/2/fieldconfigurationscheme/project
   * @secure
   */
  assignFieldConfigurationSchemeToProject = (
    data: FieldConfigurationSchemeProjectAssociation,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/fieldconfigurationscheme/project`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a field configuration scheme. This operation can only update field configuration schemes used in company-managed (classic) projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name UpdateFieldConfigurationScheme
   * @summary Update field configuration scheme
   * @request PUT:/rest/api/2/fieldconfigurationscheme/{id}
   * @secure
   */
  updateFieldConfigurationScheme = (
    id: number,
    data: UpdateFieldConfigurationSchemeDetails,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/fieldconfigurationscheme/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a field configuration scheme. This operation can only delete field configuration schemes used in company-managed (classic) projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name DeleteFieldConfigurationScheme
   * @summary Delete field configuration scheme
   * @request DELETE:/rest/api/2/fieldconfigurationscheme/{id}
   * @secure
   */
  deleteFieldConfigurationScheme = (id: number, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/fieldconfigurationscheme/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Assigns issue types to field configurations on field configuration scheme. This operation can only modify field configuration schemes used in company-managed (classic) projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue field configurations
   * @name SetFieldConfigurationSchemeMapping
   * @summary Assign issue types to field configurations
   * @request PUT:/rest/api/2/fieldconfigurationscheme/{id}/mapping
   * @secure
   */
  setFieldConfigurationSchemeMapping = (
    id: number,
    data: AssociateFieldConfigurationsWithIssueTypesRequest,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/fieldconfigurationscheme/${id}/mapping`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all filters. Deprecated, use [ Search for filters](#api-rest-api-2-filter-search-get) that supports search and pagination. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None, however, only the following filters are returned: *  filters owned by the user. *  filters shared with a group that the user is a member of. *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for. *  filters shared with a public project. *  filters shared with the public.
   *
   * @tags Filters
   * @name GetFilters
   * @summary Get filters
   * @request GET:/rest/api/2/filter
   * @deprecated
   * @secure
   */
  getFilters = (query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Filter[], void>({
      path: `/rest/api/2/filter`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a filter. The filter is shared according to the [default share scope](#api-rest-api-2-filter-post). The filter is not selected as a favorite. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Filters
   * @name CreateFilter
   * @summary Create filter
   * @request POST:/rest/api/2/filter
   * @secure
   */
  createFilter = (data: Filter, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Filter, void>({
      path: `/rest/api/2/filter`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the default sharing settings for new filters and dashboards for a user. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Filter sharing
   * @name GetDefaultShareScope
   * @summary Get default share scope
   * @request GET:/rest/api/2/filter/defaultShareScope
   * @secure
   */
  getDefaultShareScope = (params: RequestParams = {}) =>
    this.request<DefaultShareScope, void>({
      path: `/rest/api/2/filter/defaultShareScope`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the default sharing for new filters and dashboards for a user. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Filter sharing
   * @name SetDefaultShareScope
   * @summary Set default share scope
   * @request PUT:/rest/api/2/filter/defaultShareScope
   * @secure
   */
  setDefaultShareScope = (data: DefaultShareScope, params: RequestParams = {}) =>
    this.request<DefaultShareScope, void>({
      path: `/rest/api/2/filter/defaultShareScope`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the visible favorite filters of the user. This operation can be accessed anonymously. **[Permissions](#permissions) required:** A favorite filter is only visible to the user where the filter is: *  owned by the user. *  shared with a group that the user is a member of. *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for. *  shared with a public project. *  shared with the public. For example, if the user favorites a public filter that is subsequently made private that filter is not returned by this operation.
   *
   * @tags Filters
   * @name GetFavouriteFilters
   * @summary Get favorite filters
   * @request GET:/rest/api/2/filter/favourite
   * @secure
   */
  getFavouriteFilters = (query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Filter[], void>({
      path: `/rest/api/2/filter/favourite`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the filters owned by the user. If `includeFavourites` is `true`, the user's visible favorite filters are also returned. **[Permissions](#permissions) required:** Permission to access Jira, however, a favorite filters is only visible to the user where the filter is: *  owned by the user. *  shared with a group that the user is a member of. *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for. *  shared with a public project. *  shared with the public. For example, if the user favorites a public filter that is subsequently made private that filter is not returned by this operation.
   *
   * @tags Filters
   * @name GetMyFilters
   * @summary Get my filters
   * @request GET:/rest/api/2/filter/my
   * @secure
   */
  getMyFilters = (query?: { expand?: string; includeFavourites?: boolean }, params: RequestParams = {}) =>
    this.request<Filter[], void>({
      path: `/rest/api/2/filter/my`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of filters. Use this operation to get: *  specific filters, by defining `id` only. *  filters that match all of the specified attributes. For example, all filters for a user with a particular word in their name. When multiple attributes are specified only filters matching all attributes are returned. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None, however, only the following filters that match the query parameters are returned: *  filters owned by the user. *  filters shared with a group that the user is a member of. *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for. *  filters shared with a public project. *  filters shared with the public.
   *
   * @tags Filters
   * @name GetFiltersPaginated
   * @summary Search for filters
   * @request GET:/rest/api/2/filter/search
   * @secure
   */
  getFiltersPaginated = (
    query?: {
      filterName?: string;
      accountId?: string;
      owner?: string;
      groupname?: string;
      projectId?: number;
      id?: number[];
      orderBy?:
        | 'description'
        | '-description'
        | '+description'
        | 'favourite_count'
        | '-favourite_count'
        | '+favourite_count'
        | 'id'
        | '-id'
        | '+id'
        | 'is_favourite'
        | '-is_favourite'
        | '+is_favourite'
        | 'name'
        | '-name'
        | '+name'
        | 'owner'
        | '-owner'
        | '+owner'
        | 'is_shared'
        | '-is_shared'
        | '+is_shared';
      startAt?: number;
      maxResults?: number;
      expand?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanFilterDetails, ErrorCollection | void>({
      path: `/rest/api/2/filter/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a filter. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None, however, the filter is only returned where it is: *  owned by the user. *  shared with a group that the user is a member of. *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for. *  shared with a public project. *  shared with the public.
   *
   * @tags Filters
   * @name GetFilter
   * @summary Get filter
   * @request GET:/rest/api/2/filter/{id}
   * @secure
   */
  getFilter = (id: number, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Filter, void>({
      path: `/rest/api/2/filter/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a filter. Use this operation to update a filter's name, description, JQL, or sharing. **[Permissions](#permissions) required:** Permission to access Jira, however the user must own the filter.
   *
   * @tags Filters
   * @name UpdateFilter
   * @summary Update filter
   * @request PUT:/rest/api/2/filter/{id}
   * @secure
   */
  updateFilter = (id: number, data: Filter, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Filter, void>({
      path: `/rest/api/2/filter/${id}`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Delete a filter. **[Permissions](#permissions) required:** Permission to access Jira, however filters can only be deleted by the creator of the filter or a user with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Filters
   * @name DeleteFilter
   * @summary Delete filter
   * @request DELETE:/rest/api/2/filter/{id}
   * @secure
   */
  deleteFilter = (id: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/filter/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns the columns configured for a filter. The column configuration is used when the filter's results are viewed in *List View* with the *Columns* set to *Filter*. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None, however, column details are only returned for: *  filters owned by the user. *  filters shared with a group that the user is a member of. *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for. *  filters shared with a public project. *  filters shared with the public.
   *
   * @tags Filters
   * @name GetColumns
   * @summary Get columns
   * @request GET:/rest/api/2/filter/{id}/columns
   * @secure
   */
  getColumns = (id: number, params: RequestParams = {}) =>
    this.request<ColumnItem[], void>({
      path: `/rest/api/2/filter/${id}/columns`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the columns for a filter. Only navigable fields can be set as columns. Use [Get fields](#api-rest-api-2-field-get) to get the list fields in Jira. A navigable field has `navigable` set to `true`. The parameters for this resource are expressed as HTML form data. For example, in curl: `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/2/filter/10000/columns` **[Permissions](#permissions) required:** Permission to access Jira, however, columns are only set for: *  filters owned by the user. *  filters shared with a group that the user is a member of. *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for. *  filters shared with a public project. *  filters shared with the public.
   *
   * @tags Filters
   * @name SetColumns
   * @summary Set columns
   * @request PUT:/rest/api/2/filter/{id}/columns
   * @secure
   */
  setColumns = (id: number, data: string[], params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/filter/${id}/columns`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Reset the user's column configuration for the filter to the default. **[Permissions](#permissions) required:** Permission to access Jira, however, columns are only reset for: *  filters owned by the user. *  filters shared with a group that the user is a member of. *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for. *  filters shared with a public project. *  filters shared with the public.
   *
   * @tags Filters
   * @name ResetColumns
   * @summary Reset columns
   * @request DELETE:/rest/api/2/filter/{id}/columns
   * @secure
   */
  resetColumns = (id: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/filter/${id}/columns`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Add a filter as a favorite for the user. **[Permissions](#permissions) required:** Permission to access Jira, however, the user can only favorite: *  filters owned by the user. *  filters shared with a group that the user is a member of. *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for. *  filters shared with a public project. *  filters shared with the public.
   *
   * @tags Filters
   * @name SetFavouriteForFilter
   * @summary Add filter as favorite
   * @request PUT:/rest/api/2/filter/{id}/favourite
   * @secure
   */
  setFavouriteForFilter = (id: number, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Filter, void>({
      path: `/rest/api/2/filter/${id}/favourite`,
      method: 'PUT',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Removes a filter as a favorite for the user. Note that this operation only removes filters visible to the user from the user's favorites list. For example, if the user favorites a public filter that is subsequently made private (and is therefore no longer visible on their favorites list) they cannot remove it from their favorites list. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Filters
   * @name DeleteFavouriteForFilter
   * @summary Remove filter as favorite
   * @request DELETE:/rest/api/2/filter/{id}/favourite
   * @secure
   */
  deleteFavouriteForFilter = (id: number, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Filter, void>({
      path: `/rest/api/2/filter/${id}/favourite`,
      method: 'DELETE',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None, however, share permissions are only returned for: *  filters owned by the user. *  filters shared with a group that the user is a member of. *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for. *  filters shared with a public project. *  filters shared with the public.
   *
   * @tags Filter sharing
   * @name GetSharePermissions
   * @summary Get share permissions
   * @request GET:/rest/api/2/filter/{id}/permission
   * @secure
   */
  getSharePermissions = (id: number, params: RequestParams = {}) =>
    this.request<SharePermission[], void>({
      path: `/rest/api/2/filter/${id}/permission`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Add a share permissions to a filter. If you add a global share permission (one for all logged-in users or the public) it will overwrite all share permissions for the filter. Be aware that this operation uses different objects for updating share permissions compared to [Update filter](#api-rest-api-2-filter-id-put). **[Permissions](#permissions) required:** *Share dashboards and filters* [global permission](https://confluence.atlassian.com/x/x4dKLg) and the user must own the filter.
   *
   * @tags Filter sharing
   * @name AddSharePermission
   * @summary Add share permission
   * @request POST:/rest/api/2/filter/{id}/permission
   * @secure
   */
  addSharePermission = (id: number, data: SharePermissionInputBean, params: RequestParams = {}) =>
    this.request<SharePermission[], void>({
      path: `/rest/api/2/filter/${id}/permission`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None, however, a share permission is only returned for: *  filters owned by the user. *  filters shared with a group that the user is a member of. *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for. *  filters shared with a public project. *  filters shared with the public.
   *
   * @tags Filter sharing
   * @name GetSharePermission
   * @summary Get share permission
   * @request GET:/rest/api/2/filter/{id}/permission/{permissionId}
   * @secure
   */
  getSharePermission = (id: number, permissionId: number, params: RequestParams = {}) =>
    this.request<SharePermission, void>({
      path: `/rest/api/2/filter/${id}/permission/${permissionId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a share permission from a filter. **[Permissions](#permissions) required:** Permission to access Jira and the user must own the filter.
   *
   * @tags Filter sharing
   * @name DeleteSharePermission
   * @summary Delete share permission
   * @request DELETE:/rest/api/2/filter/{id}/permission/{permissionId}
   * @secure
   */
  deleteSharePermission = (id: number, permissionId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/filter/${id}/permission/${permissionId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description This operation is deprecated, use [`group/member`](#api-rest-api-2-group-member-get). Returns all users in a group. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Groups
   * @name GetGroup
   * @summary Get group
   * @request GET:/rest/api/2/group
   * @deprecated
   * @secure
   */
  getGroup = (query: { groupname: string; expand?: string }, params: RequestParams = {}) =>
    this.request<Group, void>({
      path: `/rest/api/2/group`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a group. **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
   *
   * @tags Groups
   * @name CreateGroup
   * @summary Create group
   * @request POST:/rest/api/2/group
   * @secure
   */
  createGroup = (data: AddGroupBean, params: RequestParams = {}) =>
    this.request<Group, void>({
      path: `/rest/api/2/group`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a group. **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* strategic [group](https://confluence.atlassian.com/x/24xjL)).
   *
   * @tags Groups
   * @name RemoveGroup
   * @summary Remove group
   * @request DELETE:/rest/api/2/group
   * @secure
   */
  removeGroup = (query: { groupname: string; swapGroup?: string }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/group`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of groups. **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Groups
   * @name BulkGetGroups
   * @summary Bulk get groups
   * @request GET:/rest/api/2/group/bulk
   * @secure
   */
  bulkGetGroups = (
    query?: { startAt?: number; maxResults?: number; groupId?: string[]; groupName?: string[] },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanGroupDetails, void>({
      path: `/rest/api/2/group/bulk`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of all users in a group. Note that users are ordered by username, however the username is not returned in the results due to privacy reasons. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Groups
   * @name GetUsersFromGroup
   * @summary Get users from group
   * @request GET:/rest/api/2/group/member
   * @secure
   */
  getUsersFromGroup = (
    query: { groupname: string; includeInactiveUsers?: boolean; startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanUserDetails, void>({
      path: `/rest/api/2/group/member`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds a user to a group. **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
   *
   * @tags Groups
   * @name AddUserToGroup
   * @summary Add user to group
   * @request POST:/rest/api/2/group/user
   * @secure
   */
  addUserToGroup = (query: { groupname: string }, data: UpdateUserToGroupBean, params: RequestParams = {}) =>
    this.request<Group, void>({
      path: `/rest/api/2/group/user`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Removes a user from a group. **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
   *
   * @tags Groups
   * @name RemoveUserFromGroup
   * @summary Remove user from group
   * @request DELETE:/rest/api/2/group/user
   * @secure
   */
  removeUserFromGroup = (
    query: { groupname: string; username?: string; accountId: string },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/rest/api/2/group/user`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results. The primary use case for this resource is to populate a group picker suggestions list. To this end, the returned object includes the `html` field where the matched query term is highlighted in the group name with the HTML strong tag. Also, the groups list is wrapped in a response object that contains a header for use in the picker, specifically *Showing X of Y matching groups*. The list returns with the groups sorted. If no groups match the list criteria, an empty list is returned. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg). Anonymous calls and calls by users without the required permission return an empty list.
   *
   * @tags Groups
   * @name FindGroups
   * @summary Find groups
   * @request GET:/rest/api/2/groups/picker
   * @secure
   */
  findGroups = (
    query?: { accountId?: string; query?: string; exclude?: string[]; maxResults?: number; userName?: string },
    params: RequestParams = {},
  ) =>
    this.request<FoundGroups, any>({
      path: `/rest/api/2/groups/picker`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of users and groups matching a string. The string is used: *  for users, to find a case-insensitive match with display name and e-mail address. Note that if a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required. *  for groups, to find a case-sensitive match with group name. For example, if the string *tin* is used, records with the display name *Tina*, email address *sarah@tinplatetraining.com*, and the group *accounting* would be returned. Optionally, the search can be refined to: *  the projects and issue types associated with a custom field, such as a user picker. The search can then be further refined to return only users and groups that have permission to view specific: *  projects. *  issue types. If multiple projects or issue types are specified, they must be a subset of those enabled for the custom field or no results are returned. For example, if a field is enabled for projects A, B, and C then the search could be limited to projects B and C. However, if the search is limited to projects B and D, nothing is returned. *  not return Connect app users and groups. *  return groups that have a case-insensitive match with the query. The primary use case for this resource is to populate a picker field suggestion list with users or groups. To this end, the returned object includes an `html` field for each list. This field highlights the matched query term in the item name with the HTML strong tag. Also, each list is wrapped in a response object that contains a header for use in a picker, specifically *Showing X of Y matching groups*. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/yodKLg).
   *
   * @tags Group and user picker
   * @name FindUsersAndGroups
   * @summary Find users and groups
   * @request GET:/rest/api/2/groupuserpicker
   * @secure
   */
  findUsersAndGroups = (
    query: {
      query: string;
      maxResults?: number;
      showAvatar?: boolean;
      fieldId?: string;
      projectId?: string[];
      issueTypeId?: string[];
      avatarSize?:
        | 'xsmall'
        | 'xsmall@2x'
        | 'xsmall@3x'
        | 'small'
        | 'small@2x'
        | 'small@3x'
        | 'medium'
        | 'medium@2x'
        | 'medium@3x'
        | 'large'
        | 'large@2x'
        | 'large@3x'
        | 'xlarge'
        | 'xlarge@2x'
        | 'xlarge@3x'
        | 'xxlarge'
        | 'xxlarge@2x'
        | 'xxlarge@3x'
        | 'xxxlarge'
        | 'xxxlarge@2x'
        | 'xxxlarge@3x';
      caseInsensitive?: boolean;
      excludeConnectAddons?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FoundUsersAndGroups, void>({
      path: `/rest/api/2/groupuserpicker`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns licensing information about the Jira instance. **[Permissions](#permissions) required:** None.
   *
   * @tags Instance information
   * @name GetLicense
   * @summary Get license
   * @request GET:/rest/api/2/instance/license
   * @secure
   */
  getLicense = (params: RequestParams = {}) =>
    this.request<License, void>({
      path: `/rest/api/2/instance/license`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask. A transition may be applied, to move the issue or subtask to a workflow step other than the default start step, and issue properties set. The content of the issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get). These are the same fields that appear on the issue's create screen. Creating a subtask differs from creating an issue as follows: *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get) to find subtask issue types). *  `parent` must contain the ID or key of the parent issue. **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue or subtask is created.
   *
   * @tags Issues
   * @name CreateIssue
   * @summary Create issue
   * @request POST:/rest/api/2/issue
   * @secure
   */
  createIssue = (data: IssueUpdateDetails, query?: { updateHistory?: boolean }, params: RequestParams = {}) =>
    this.request<CreatedIssue, ErrorCollection>({
      path: `/rest/api/2/issue`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates issues and, where the option to create subtasks is enabled in Jira, subtasks. Transitions may be applied, to move the issues or subtasks to a workflow step other than the default start step, and issue properties set. The content of each issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get). These are the same fields that appear on the issues' create screens. Creating a subtask differs from creating an issue as follows: *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get) to find subtask issue types). *  `parent` the must contain the ID or key of the parent issue. **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which each issue or subtask is created.
   *
   * @tags Issues
   * @name CreateIssues
   * @summary Bulk create issue
   * @request POST:/rest/api/2/issue/bulk
   * @secure
   */
  createIssues = (data: IssuesUpdateBean, params: RequestParams = {}) =>
    this.request<CreatedIssues, CreatedIssues | void>({
      path: `/rest/api/2/issue/bulk`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in [ Create issue](#api-rest-api-2-issue-post) and [Create issues](#api-rest-api-2-issue-bulk-post). The request can be restricted to specific projects or issue types using the query parameters. The response will contain information for the valid projects, issue types, or project and issue type combinations requested. Note that invalid project, issue type, or project and issue type combinations do not generate errors. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) in the requested projects.
   *
   * @tags Issues
   * @name GetCreateIssueMeta
   * @summary Get create issue metadata
   * @request GET:/rest/api/2/issue/createmeta
   * @secure
   */
  getCreateIssueMeta = (
    query?: {
      projectIds?: string[];
      projectKeys?: string[];
      issuetypeIds?: string[];
      issuetypeNames?: string[];
      expand?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<IssueCreateMetadata, void>({
      path: `/rest/api/2/issue/createmeta`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns lists of issues matching a query string. Use this resource to provide auto-completion suggestions when the user is looking for an issue using a word or string. This operation returns two lists: *  `History Search` which includes issues from the user's history of created, edited, or viewed issues that contain the string in the `query` parameter. *  `Current Search` which includes issues that match the JQL expression in `currentJQL` and contain the string in the `query` parameter. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Issue search
   * @name GetIssuePickerResource
   * @summary Get issue picker suggestions
   * @request GET:/rest/api/2/issue/picker
   * @secure
   */
  getIssuePickerResource = (
    query?: {
      query?: string;
      currentJQL?: string;
      currentIssueKey?: string;
      currentProjectId?: string;
      showSubTasks?: boolean;
      showSubTaskParent?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<IssuePickerSuggestions, void>({
      path: `/rest/api/2/issue/picker`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the values of entity properties on issues. It can set up to 10 entity properties on up to 10,000 issues. The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON. The maximum length of single issue property value is 32768 characters. This operation can be accessed anonymously. This operation is: *  transactional, either all properties are updated in all eligible issues or, when errors occur, no properties are updated. *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates. **[Permissions](#permissions) required:** *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue properties
   * @name BulkSetIssuesProperties
   * @summary Bulk set issues properties
   * @request POST:/rest/api/2/issue/properties
   * @secure
   */
  bulkSetIssuesProperties = (data: IssueEntityProperties, params: RequestParams = {}) =>
    this.request<any, void | ErrorCollection>({
      path: `/rest/api/2/issue/properties`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Sets a property value on multiple issues. The value set can be a constant or determined by a [Jira expression](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/). Expressions must be computable with constant complexity when applied to a set of issues. Expressions must also comply with the [restrictions](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions) that apply to all Jira expressions. The issues to be updated can be specified by a filter. The filter identifies issues eligible for update using these criteria: *  `entityIds` Only issues from this list are eligible. *  `currentValue` Only issues with the property set to this value are eligible. *  `hasProperty`: *  If *true*, only issues with the property are eligible. *  If *false*, only issues without the property are eligible. If more than one criteria is specified, they are joined with the logical *AND*: only issues that satisfy all criteria are eligible. If an invalid combination of criteria is provided, an error is returned. For example, specifying a `currentValue` and `hasProperty` as *false* would not match any issues (because without the property the property cannot have a value). The filter is optional. Without the filter all the issues visible to the user and where the user has the EDIT\_ISSUES permission for the issue are considered eligible. This operation is: *  transactional, either all eligible issues are updated or, when errors occur, none are updated. *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.
   *
   * @tags Issue properties
   * @name BulkSetIssueProperty
   * @summary Bulk set issue property
   * @request PUT:/rest/api/2/issue/properties/{propertyKey}
   * @secure
   */
  bulkSetIssueProperty = (propertyKey: string, data: BulkIssuePropertyUpdateRequest, params: RequestParams = {}) =>
    this.request<any, void | ErrorCollection>({
      path: `/rest/api/2/issue/properties/${propertyKey}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria. The criteria the filter used to identify eligible issues are: *  `entityIds` Only issues from this list are eligible. *  `currentValue` Only issues with the property set to this value are eligible. If both criteria is specified, they are joined with the logical *AND*: only issues that satisfy both criteria are considered eligible. If no filter criteria are specified, all the issues visible to the user and where the user has the EDIT\_ISSUES permission for the issue are considered eligible. This operation is: *  transactional, either the property is deleted from all eligible issues or, when errors occur, no properties are deleted. *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates. **[Permissions](#permissions) required:** *  *Browse projects* [ project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.
   *
   * @tags Issue properties
   * @name BulkDeleteIssueProperty
   * @summary Bulk delete issue property
   * @request DELETE:/rest/api/2/issue/properties/{propertyKey}
   * @secure
   */
  bulkDeleteIssueProperty = (propertyKey: string, data: IssueFilterForBulkPropertyDelete, params: RequestParams = {}) =>
    this.request<any, void | ErrorCollection>({
      path: `/rest/api/2/issue/properties/${propertyKey}`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns the details for an issue. The issue is identified by its ID or key, however, if the identifier doesn't match an issue, a case-insensitive search and check for moved issues is performed. If a matching issue is found its details are returned, a 302 or other redirect is **not** returned. The issue key returned in the response is the key of the issue found. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issues
   * @name GetIssue
   * @summary Get issue
   * @request GET:/rest/api/2/issue/{issueIdOrKey}
   * @secure
   */
  getIssue = (
    issueIdOrKey: string,
    query?: {
      fields?: string[];
      fieldsByKeys?: boolean;
      expand?: string;
      properties?: string[];
      updateHistory?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<IssueBean, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Edits an issue. A transition may be applied and issue properties updated as part of the edit. The edits to the issue's fields are defined using `update` and `fields`. The fields that can be edited are determined using [ Get edit issue metadata](#api-rest-api-2-issue-issueIdOrKey-editmeta-get). The parent field may be set by key or ID. For standard issue types, the parent may be removed by setting `update.parent.set.none` to *true*. Connect app users with admin permission (from user permissions and app scopes) and Forge app users with the `manage:jira-configuration` scope can override the screen security configuration using `overrideScreenSecurity` and `overrideEditableFlag`. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* and *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issues
   * @name EditIssue
   * @summary Edit issue
   * @request PUT:/rest/api/2/issue/{issueIdOrKey}
   * @secure
   */
  editIssue = (
    issueIdOrKey: string,
    data: IssueUpdateDetails,
    query?: { notifyUsers?: boolean; overrideScreenSecurity?: boolean; overrideEditableFlag?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an issue. An issue cannot be deleted if it has one or more subtasks. To delete an issue with subtasks, set `deleteSubtasks`. This causes the issue's subtasks to be deleted with the issue. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* and *Delete issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issues
   * @name DeleteIssue
   * @summary Delete issue
   * @request DELETE:/rest/api/2/issue/{issueIdOrKey}
   * @secure
   */
  deleteIssue = (issueIdOrKey: string, query?: { deleteSubtasks?: 'true' | 'false' }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Assigns an issue to a user. Use this operation when the calling user does not have the *Edit Issues* permission but has the *Assign issue* permission for the project that the issue is in. If `name` or `accountId` is set to: *  `"-1"`, the issue is assigned to the default assignee for the project. *  `null`, the issue is set to unassigned. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse Projects* and *Assign Issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issues
   * @name AssignIssue
   * @summary Assign issue
   * @request PUT:/rest/api/2/issue/{issueIdOrKey}/assignee
   * @secure
   */
  assignIssue = (issueIdOrKey: string, data: User, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/assignee`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds one or more attachments to an issue. Attachments are posted as multipart/form-data ([RFC 1867](https://www.ietf.org/rfc/rfc1867.txt)). Note that: *  The request must have a `X-Atlassian-Token: no-check` header, if not it is blocked. See [Special headers](#special-request-headers) for more information. *  The name of the multipart/form-data parameter that contains the attachments must be `file`. The following examples upload a file called *myfile.txt* to the issue *TEST-123*: #### curl #### curl --location --request POST 'https://your-domain.atlassian.net/rest/api/2/issue/TEST-123/attachments' -u 'email@example.com:<api_token>' -H 'X-Atlassian-Token: no-check' --form 'file=@"myfile.txt"' #### Node.js #### // This code sample uses the 'node-fetch' and 'form-data' libraries: // https://www.npmjs.com/package/node-fetch // https://www.npmjs.com/package/form-data const fetch = require('node-fetch'); const FormData = require('form-data'); const fs = require('fs'); const filePath = 'myfile.txt'; const form = new FormData(); const stats = fs.statSync(filePath); const fileSizeInBytes = stats.size; const fileStream = fs.createReadStream(filePath); form.append('file', fileStream, {knownLength: fileSizeInBytes}); fetch('https://your-domain.atlassian.net/rest/api/2/issue/TEST-123/attachments', { method: 'POST', body: form, headers: { 'Authorization': `Basic ${Buffer.from( 'email@example.com:' ).toString('base64')}`, 'Accept': 'application/json', 'X-Atlassian-Token': 'no-check' } }) .then(response => { console.log( `Response: ${response.status} ${response.statusText}` ); return response.text(); }) .then(text => console.log(text)) .catch(err => console.error(err)); #### Java #### // This code sample uses the  'Unirest' library: // http://unirest.io/java.html HttpResponse response = Unirest.post("https://your-domain.atlassian.net/rest/api/2/issue/{issueIdOrKey}/attachments") .basicAuth("email@example.com", "") .header("Accept", "application/json") .header("X-Atlassian-Token", "no-check") .field("file", new File("myfile.txt")) .asJson(); System.out.println(response.getBody()); #### Python #### # This code sample uses the 'requests' library: # http://docs.python-requests.org import requests from requests.auth import HTTPBasicAuth import json url = "https://your-domain.atlassian.net/rest/api/2/issue/{issueIdOrKey}/attachments" auth = HTTPBasicAuth("email@example.com", "") headers = { "Accept": "application/json", "X-Atlassian-Token": "no-check" } response = requests.request( "POST", url, headers = headers, auth = auth, files = { "file": ("myfile.txt", open("myfile.txt","rb"), "application-type") } ) print(json.dumps(json.loads(response.text), sort_keys=True, indent=4, separators=(",", ": "))) #### PHP #### // This code sample uses the 'Unirest' library: // http://unirest.io/php.html Unirest\Request::auth('email@example.com', ''); $headers = array( 'Accept' => 'application/json', 'X-Atlassian-Token' => 'no-check' ); $parameters = array( 'file' => File::add('myfile.txt') ); $response = Unirest\Request::post( 'https://your-domain.atlassian.net/rest/api/2/issue/{issueIdOrKey}/attachments', $headers, $parameters ); var_dump($response) #### Forge #### // This sample uses Atlassian Forge and the `form-data` library. // https://developer.atlassian.com/platform/forge/ // https://www.npmjs.com/package/form-data import api from "@forge/api"; import FormData from "form-data"; const form = new FormData(); form.append('file', fileStream, {knownLength: fileSizeInBytes}); const response = await api.asApp().requestJira('/rest/api/2/issue/{issueIdOrKey}/attachments', { method: 'POST', body: form, headers: { 'Accept': 'application/json', 'X-Atlassian-Token': 'no-check' } }); console.log(`Response: ${response.status} ${response.statusText}`); console.log(await response.json()); Tip: Use a client library. Many client libraries have classes for handling multipart POST operations. For example, in Java, the Apache HTTP Components library provides a [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html) class for multipart POST operations. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse Projects* and *Create attachments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue attachments
   * @name AddAttachment
   * @summary Add attachment
   * @request POST:/rest/api/2/issue/{issueIdOrKey}/attachments
   * @secure
   */
  addAttachment = (issueIdOrKey: string, data: File, params: RequestParams = {}) =>
    this.request<Attachment[], void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/attachments`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of all changelogs for an issue sorted by date, starting from the oldest. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issues
   * @name GetChangeLogs
   * @summary Get changelogs
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/changelog
   * @secure
   */
  getChangeLogs = (
    issueIdOrKey: string,
    query?: { startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanChangelog, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/changelog`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns changelogs for an issue specified by a list of changelog IDs. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issues
   * @name GetChangeLogsByIds
   * @summary Get changelogs by IDs
   * @request POST:/rest/api/2/issue/{issueIdOrKey}/changelog/list
   * @secure
   */
  getChangeLogsByIds = (issueIdOrKey: string, data: IssueChangelogIds, params: RequestParams = {}) =>
    this.request<PageOfChangelogs, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/changelog/list`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all comments for an issue. This operation can be accessed anonymously. **[Permissions](#permissions) required:** Comments are included in the response where the user has: *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  If the comment has visibility restrictions, belongs to the group or has the role visibility is role visibility is restricted to.
   *
   * @tags Issue comments
   * @name GetComments
   * @summary Get comments
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/comment
   * @secure
   */
  getComments = (
    issueIdOrKey: string,
    query?: { startAt?: number; maxResults?: number; orderBy?: 'created' | '-created' | '+created'; expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<PageOfComments, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/comment`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds a comment to an issue. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* and *Add comments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue comments
   * @name AddComment
   * @summary Add comment
   * @request POST:/rest/api/2/issue/{issueIdOrKey}/comment
   * @secure
   */
  addComment = (issueIdOrKey: string, data: Comment, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Comment, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/comment`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a comment. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue comments
   * @name GetComment
   * @summary Get comment
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/comment/{id}
   * @secure
   */
  getComment = (issueIdOrKey: string, id: string, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Comment, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/comment/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a comment. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  *Edit all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any comment or *Edit own comments* to update comment created by the user. *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue comments
   * @name UpdateComment
   * @summary Update comment
   * @request PUT:/rest/api/2/issue/{issueIdOrKey}/comment/{id}
   * @secure
   */
  updateComment = (
    issueIdOrKey: string,
    id: string,
    data: Comment,
    query?: { expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<Comment, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/comment/${id}`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a comment. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  *Delete all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any comment or *Delete own comments* to delete comment created by the user, *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue comments
   * @name DeleteComment
   * @summary Delete comment
   * @request DELETE:/rest/api/2/issue/{issueIdOrKey}/comment/{id}
   * @secure
   */
  deleteComment = (issueIdOrKey: string, id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/comment/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in [Edit issue](#api-rest-api-2-issue-issueIdOrKey-put). Connect app users with admin permission (from user permissions and app scopes) and Forge app users with the `manage:jira-configuration` scope can return additional details using: *  `overrideScreenSecurity` Returns hidden fields. *  `overrideEditableFlag` Returns uneditable fields. For example, where an issue has a workflow status of closed none of its fields are editable. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. Note: For any fields to be editable the user must have the *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the issue.
   *
   * @tags Issues
   * @name GetEditIssueMeta
   * @summary Get edit issue metadata
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/editmeta
   * @secure
   */
  getEditIssueMeta = (
    issueIdOrKey: string,
    query?: { overrideScreenSecurity?: boolean; overrideEditableFlag?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<IssueUpdateMetadata, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/editmeta`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates an email notification for an issue and adds it to the mail queue. **[Permissions](#permissions) required:** *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issues
   * @name Notify
   * @summary Send notification for issue
   * @request POST:/rest/api/2/issue/{issueIdOrKey}/notify
   * @secure
   */
  notify = (issueIdOrKey: string, data: Notification, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/notify`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the URLs and keys of an issue's properties. This operation can be accessed anonymously. **[Permissions](#permissions) required:** Property details are only returned where the user has: *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue properties
   * @name GetIssuePropertyKeys
   * @summary Get issue property keys
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/properties
   * @secure
   */
  getIssuePropertyKeys = (issueIdOrKey: string, params: RequestParams = {}) =>
    this.request<PropertyKeys, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/properties`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the key and value of an issue's property. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue properties
   * @name GetIssueProperty
   * @summary Get issue property
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/properties/{propertyKey}
   * @secure
   */
  getIssueProperty = (issueIdOrKey: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<EntityProperty, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/properties/${propertyKey}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the value of an issue's property. Use this resource to store custom data against an issue. The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue properties
   * @name SetIssueProperty
   * @summary Set issue property
   * @request PUT:/rest/api/2/issue/{issueIdOrKey}/properties/{propertyKey}
   * @secure
   */
  setIssueProperty = (issueIdOrKey: string, propertyKey: string, data: any, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/properties/${propertyKey}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an issue's property. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue properties
   * @name DeleteIssueProperty
   * @summary Delete issue property
   * @request DELETE:/rest/api/2/issue/{issueIdOrKey}/properties/{propertyKey}
   * @secure
   */
  deleteIssueProperty = (issueIdOrKey: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/properties/${propertyKey}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned. Where a global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`. This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue remote links
   * @name GetRemoteIssueLinks
   * @summary Get remote issue links
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/remotelink
   * @secure
   */
  getRemoteIssueLinks = (issueIdOrKey: string, query?: { globalId?: string }, params: RequestParams = {}) =>
    this.request<RemoteIssueLink, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/remotelink`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates or updates a remote issue link for an issue. If a `globalId` is provided and a remote issue link with that global ID is found it is updated. Any fields without values in the request are set to null. Otherwise, the remote issue link is created. This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue remote links
   * @name CreateOrUpdateRemoteIssueLink
   * @summary Create or update remote issue link
   * @request POST:/rest/api/2/issue/{issueIdOrKey}/remotelink
   * @secure
   */
  createOrUpdateRemoteIssueLink = (issueIdOrKey: string, data: RemoteIssueLinkRequest, params: RequestParams = {}) =>
    this.request<RemoteIssueLinkIdentifies, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/remotelink`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes the remote issue link from the issue using the link's global ID. Where the global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`. This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is implemented, issue-level security permission to view the issue.
   *
   * @tags Issue remote links
   * @name DeleteRemoteIssueLinkByGlobalId
   * @summary Delete remote issue link by global ID
   * @request DELETE:/rest/api/2/issue/{issueIdOrKey}/remotelink
   * @secure
   */
  deleteRemoteIssueLinkByGlobalId = (issueIdOrKey: string, query: { globalId: string }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/remotelink`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a remote issue link for an issue. This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue remote links
   * @name GetRemoteIssueLinkById
   * @summary Get remote issue link by ID
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/remotelink/{linkId}
   * @secure
   */
  getRemoteIssueLinkById = (issueIdOrKey: string, linkId: string, params: RequestParams = {}) =>
    this.request<RemoteIssueLink, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/remotelink/${linkId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a remote issue link for an issue. Note: Fields without values in the request are set to null. This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue remote links
   * @name UpdateRemoteIssueLink
   * @summary Update remote issue link by ID
   * @request PUT:/rest/api/2/issue/{issueIdOrKey}/remotelink/{linkId}
   * @secure
   */
  updateRemoteIssueLink = (
    issueIdOrKey: string,
    linkId: string,
    data: RemoteIssueLinkRequest,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/remotelink/${linkId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a remote issue link from an issue. This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects*, *Edit issues*, and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue remote links
   * @name DeleteRemoteIssueLinkById
   * @summary Delete remote issue link by ID
   * @request DELETE:/rest/api/2/issue/{issueIdOrKey}/remotelink/{linkId}
   * @secure
   */
  deleteRemoteIssueLinkById = (issueIdOrKey: string, linkId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/remotelink/${linkId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status. Note, if a request is made for a transition that does not exist or cannot be performed on the issue, given its status, the response will return any empty transitions list. This operation can be accessed anonymously. **[Permissions](#permissions) required: A list or transition is returned only when the user has:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. However, if the user does not have the *Transition issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) the response will not list any transitions.
   *
   * @tags Issues
   * @name GetTransitions
   * @summary Get transitions
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/transitions
   * @secure
   */
  getTransitions = (
    issueIdOrKey: string,
    query?: {
      expand?: string;
      transitionId?: string;
      skipRemoteOnlyCondition?: boolean;
      includeUnavailableTransitions?: boolean;
      sortByOpsBarAndStatus?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<Transitions, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/transitions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen. sortByCategory To update the fields on the transition screen, specify the fields in the `fields` or `update` parameters in the request body. Get details about the fields using [ Get transitions](#api-rest-api-2-issue-issueIdOrKey-transitions-get) with the `transitions.fields` expand. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* and *Transition issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issues
   * @name DoTransition
   * @summary Transition issue
   * @request POST:/rest/api/2/issue/{issueIdOrKey}/transitions
   * @secure
   */
  doTransition = (issueIdOrKey: string, data: IssueUpdateDetails, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/transitions`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns details about the votes on an issue. This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is ini *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. Note that users with the necessary permissions for this operation but without the *View voters and watchers* project permissions are not returned details in the `voters` field.
   *
   * @tags Issue votes
   * @name GetVotes
   * @summary Get votes
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/votes
   * @secure
   */
  getVotes = (issueIdOrKey: string, params: RequestParams = {}) =>
    this.request<Votes, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/votes`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds the user's vote to an issue. This is the equivalent of the user clicking *Vote* on an issue in Jira. This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue votes
   * @name AddVote
   * @summary Add vote
   * @request POST:/rest/api/2/issue/{issueIdOrKey}/votes
   * @secure
   */
  addVote = (issueIdOrKey: string, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/votes`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a user's vote from an issue. This is the equivalent of the user clicking *Unvote* on an issue in Jira. This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue votes
   * @name RemoveVote
   * @summary Delete vote
   * @request DELETE:/rest/api/2/issue/{issueIdOrKey}/votes
   * @secure
   */
  removeVote = (issueIdOrKey: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/votes`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns the watchers for an issue. This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is ini *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  To see details of users on the watchlist other than themselves, *View voters and watchers* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   *
   * @tags Issue watchers
   * @name GetIssueWatchers
   * @summary Get issue watchers
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/watchers
   * @secure
   */
  getIssueWatchers = (issueIdOrKey: string, params: RequestParams = {}) =>
    this.request<Watchers, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/watchers`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds a user as a watcher of an issue by passing the account ID of the user. For example, `"5b10ac8d82e05b22cc7d4ef5"`. If no user is specified the calling user is added. This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  To add users other than themselves to the watchlist, *Manage watcher list* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   *
   * @tags Issue watchers
   * @name AddWatcher
   * @summary Add watcher
   * @request POST:/rest/api/2/issue/{issueIdOrKey}/watchers
   * @secure
   */
  addWatcher = (issueIdOrKey: string, data: string, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/watchers`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a user as a watcher of an issue. This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  To remove users other than themselves from the watchlist, *Manage watcher list* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   *
   * @tags Issue watchers
   * @name RemoveWatcher
   * @summary Delete watcher
   * @request DELETE:/rest/api/2/issue/{issueIdOrKey}/watchers
   * @secure
   */
  removeWatcher = (
    issueIdOrKey: string,
    query?: { username?: string; accountId?: string },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/watchers`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns worklogs for an issue, starting from the oldest worklog or from the worklog started on or after a date and time. Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM). This operation can be accessed anonymously. **[Permissions](#permissions) required:** Workloads are only returned where the user has: *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue worklogs
   * @name GetIssueWorklog
   * @summary Get issue worklogs
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/worklog
   * @secure
   */
  getIssueWorklog = (
    issueIdOrKey: string,
    query?: { startAt?: number; maxResults?: number; startedAfter?: number; startedBefore?: number; expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<PageOfWorklogs, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/worklog`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds a worklog to an issue. Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* and *Work on issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue worklogs
   * @name AddWorklog
   * @summary Add worklog
   * @request POST:/rest/api/2/issue/{issueIdOrKey}/worklog
   * @secure
   */
  addWorklog = (
    issueIdOrKey: string,
    data: Worklog,
    query?: {
      notifyUsers?: boolean;
      adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto';
      newEstimate?: string;
      reduceBy?: string;
      expand?: string;
      overrideEditableFlag?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<Worklog, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/worklog`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a worklog. Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue worklogs
   * @name GetWorklog
   * @summary Get worklog
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/worklog/{id}
   * @secure
   */
  getWorklog = (issueIdOrKey: string, id: string, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Worklog, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/worklog/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a worklog. Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit own worklogs* to update worklogs created by the user. *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue worklogs
   * @name UpdateWorklog
   * @summary Update worklog
   * @request PUT:/rest/api/2/issue/{issueIdOrKey}/worklog/{id}
   * @secure
   */
  updateWorklog = (
    issueIdOrKey: string,
    id: string,
    data: Worklog,
    query?: {
      notifyUsers?: boolean;
      adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto';
      newEstimate?: string;
      expand?: string;
      overrideEditableFlag?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<Worklog, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/worklog/${id}`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a worklog from an issue. Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  *Delete all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any worklog or *Delete own worklogs* to delete worklogs created by the user, *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue worklogs
   * @name DeleteWorklog
   * @summary Delete worklog
   * @request DELETE:/rest/api/2/issue/{issueIdOrKey}/worklog/{id}
   * @secure
   */
  deleteWorklog = (
    issueIdOrKey: string,
    id: string,
    query?: {
      notifyUsers?: boolean;
      adjustEstimate?: 'new' | 'leave' | 'manual' | 'auto';
      newEstimate?: string;
      increaseBy?: string;
      overrideEditableFlag?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/worklog/${id}`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns the keys of all properties for a worklog. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue worklog properties
   * @name GetWorklogPropertyKeys
   * @summary Get worklog property keys
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/worklog/{worklogId}/properties
   * @secure
   */
  getWorklogPropertyKeys = (issueIdOrKey: string, worklogId: string, params: RequestParams = {}) =>
    this.request<PropertyKeys, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/worklog/${worklogId}/properties`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the value of a worklog property. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue worklog properties
   * @name GetWorklogProperty
   * @summary Get worklog property
   * @request GET:/rest/api/2/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}
   * @secure
   */
  getWorklogProperty = (issueIdOrKey: string, worklogId: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<EntityProperty, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/worklog/${worklogId}/properties/${propertyKey}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the value of a worklog property. Use this operation to store custom data against the worklog. The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit own worklogs* to update worklogs created by the user. *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue worklog properties
   * @name SetWorklogProperty
   * @summary Set worklog property
   * @request PUT:/rest/api/2/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}
   * @secure
   */
  setWorklogProperty = (
    issueIdOrKey: string,
    worklogId: string,
    propertyKey: string,
    data: any,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/worklog/${worklogId}/properties/${propertyKey}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a worklog property. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue worklog properties
   * @name DeleteWorklogProperty
   * @summary Delete worklog property
   * @request DELETE:/rest/api/2/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}
   * @secure
   */
  deleteWorklogProperty = (issueIdOrKey: string, worklogId: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/issue/${issueIdOrKey}/worklog/${worklogId}/properties/${propertyKey}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have [Issue Linking](https://confluence.atlassian.com/x/yoXKM) enabled. This resource returns nothing on the creation of an issue link. To obtain the ID of the issue link, use `https://your-domain.atlassian.net/rest/api/2/issue/[linked issue key]?fields=issuelinks`. If the link request duplicates a link, the response indicates that the issue link was created. If the request included a comment, the comment is added. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse project* [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the issues to be linked, *  *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) on the project containing the from (outward) issue, *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue. *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   *
   * @tags Issue links
   * @name LinkIssues
   * @summary Create issue link
   * @request POST:/rest/api/2/issueLink
   * @secure
   */
  linkIssues = (data: LinkIssueRequestJsonBean, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issueLink`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns an issue link. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Browse project* [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the linked issues. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, permission to view both of the issues.
   *
   * @tags Issue links
   * @name GetIssueLink
   * @summary Get issue link
   * @request GET:/rest/api/2/issueLink/{linkId}
   * @secure
   */
  getIssueLink = (linkId: string, params: RequestParams = {}) =>
    this.request<IssueLink, void>({
      path: `/rest/api/2/issueLink/${linkId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an issue link. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  Browse project [project permission](https://confluence.atlassian.com/x/yodKLg) for all the projects containing the issues in the link. *  *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one of the projects containing issues in the link. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, permission to view both of the issues.
   *
   * @tags Issue links
   * @name DeleteIssueLink
   * @summary Delete issue link
   * @request DELETE:/rest/api/2/issueLink/{linkId}
   * @secure
   */
  deleteIssueLink = (linkId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/issueLink/${linkId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns a list of all issue link types. To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
   *
   * @tags Issue link types
   * @name GetIssueLinkTypes
   * @summary Get issue link types
   * @request GET:/rest/api/2/issueLinkType
   * @secure
   */
  getIssueLinkTypes = (params: RequestParams = {}) =>
    this.request<IssueLinkTypes, void>({
      path: `/rest/api/2/issueLinkType`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link's inward and outward relationships. To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue link types
   * @name CreateIssueLinkType
   * @summary Create issue link type
   * @request POST:/rest/api/2/issueLinkType
   * @secure
   */
  createIssueLinkType = (data: IssueLinkType, params: RequestParams = {}) =>
    this.request<IssueLinkType, void>({
      path: `/rest/api/2/issueLinkType`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns an issue link type. To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
   *
   * @tags Issue link types
   * @name GetIssueLinkType
   * @summary Get issue link type
   * @request GET:/rest/api/2/issueLinkType/{issueLinkTypeId}
   * @secure
   */
  getIssueLinkType = (issueLinkTypeId: string, params: RequestParams = {}) =>
    this.request<IssueLinkType, void>({
      path: `/rest/api/2/issueLinkType/${issueLinkTypeId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates an issue link type. To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue link types
   * @name UpdateIssueLinkType
   * @summary Update issue link type
   * @request PUT:/rest/api/2/issueLinkType/{issueLinkTypeId}
   * @secure
   */
  updateIssueLinkType = (issueLinkTypeId: string, data: IssueLinkType, params: RequestParams = {}) =>
    this.request<IssueLinkType, void>({
      path: `/rest/api/2/issueLinkType/${issueLinkTypeId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an issue link type. To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue link types
   * @name DeleteIssueLinkType
   * @summary Delete issue link type
   * @request DELETE:/rest/api/2/issueLinkType/{issueLinkTypeId}
   * @secure
   */
  deleteIssueLinkType = (issueLinkTypeId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/issueLinkType/${issueLinkTypeId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns all [issue security schemes](https://confluence.atlassian.com/x/J4lKLg). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue security schemes
   * @name GetIssueSecuritySchemes
   * @summary Get issue security schemes
   * @request GET:/rest/api/2/issuesecurityschemes
   * @secure
   */
  getIssueSecuritySchemes = (params: RequestParams = {}) =>
    this.request<SecuritySchemes, void>({
      path: `/rest/api/2/issuesecurityschemes`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns an issue security scheme along with its security levels. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project that uses the requested issue security scheme.
   *
   * @tags Issue security schemes
   * @name GetIssueSecurityScheme
   * @summary Get issue security scheme
   * @request GET:/rest/api/2/issuesecurityschemes/{id}
   * @secure
   */
  getIssueSecurityScheme = (id: number, params: RequestParams = {}) =>
    this.request<SecurityScheme, void>({
      path: `/rest/api/2/issuesecurityschemes/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns issue security level members. Only issue security level members in context of classic projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue security level
   * @name GetIssueSecurityLevelMembers
   * @summary Get issue security level members
   * @request GET:/rest/api/2/issuesecurityschemes/{issueSecuritySchemeId}/members
   * @secure
   */
  getIssueSecurityLevelMembers = (
    issueSecuritySchemeId: number,
    query?: { startAt?: number; maxResults?: number; issueSecurityLevelId?: number[]; expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanIssueSecurityLevelMember, void>({
      path: `/rest/api/2/issuesecurityschemes/${issueSecuritySchemeId}/members`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all issue types. This operation can be accessed anonymously. **[Permissions](#permissions) required:** Issue types are only returned as follows: *  if the user has the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), all issue types are returned. *  if the user has the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, the issue types associated with the projects the user has permission to browse are returned.
   *
   * @tags Issue types
   * @name GetIssueAllTypes
   * @summary Get all issue types for user
   * @request GET:/rest/api/2/issuetype
   * @secure
   */
  getIssueAllTypes = (params: RequestParams = {}) =>
    this.request<IssueTypeDetails[], void>({
      path: `/rest/api/2/issuetype`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates an issue type and adds it to the default issue type scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue types
   * @name CreateIssueType
   * @summary Create issue type
   * @request POST:/rest/api/2/issuetype
   * @secure
   */
  createIssueType = (data: IssueTypeCreateBean, params: RequestParams = {}) =>
    this.request<IssueTypeDetails, void>({
      path: `/rest/api/2/issuetype`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns issue types for a project. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) in the relevant project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue types
   * @name GetIssueTypesForProject
   * @summary Get issue types for project
   * @request GET:/rest/api/2/issuetype/project
   * @secure
   */
  getIssueTypesForProject = (query: { projectId: number; level?: number }, params: RequestParams = {}) =>
    this.request<IssueTypeDetails[], void>({
      path: `/rest/api/2/issuetype/project`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns an issue type. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) in a project the issue type is associated with or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue types
   * @name GetIssueType
   * @summary Get issue type
   * @request GET:/rest/api/2/issuetype/{id}
   * @secure
   */
  getIssueType = (id: string, params: RequestParams = {}) =>
    this.request<IssueTypeDetails, void>({
      path: `/rest/api/2/issuetype/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates the issue type. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue types
   * @name UpdateIssueType
   * @summary Update issue type
   * @request PUT:/rest/api/2/issuetype/{id}
   * @secure
   */
  updateIssueType = (id: string, data: IssueTypeUpdateBean, params: RequestParams = {}) =>
    this.request<IssueTypeDetails, void>({
      path: `/rest/api/2/issuetype/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (`alternativeIssueTypeId`). A list of alternative issue types are obtained from the [Get alternative issue types](#api-rest-api-2-issuetype-id-alternatives-get) resource. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue types
   * @name DeleteIssueType
   * @summary Delete issue type
   * @request DELETE:/rest/api/2/issuetype/{id}
   * @secure
   */
  deleteIssueType = (id: string, query?: { alternativeIssueTypeId?: string }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/issuetype/${id}`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Issue types
   * @name GetAlternativeIssueTypes
   * @summary Get alternative issue types
   * @request GET:/rest/api/2/issuetype/{id}/alternatives
   * @secure
   */
  getAlternativeIssueTypes = (id: string, params: RequestParams = {}) =>
    this.request<IssueTypeDetails[], void>({
      path: `/rest/api/2/issuetype/${id}/alternatives`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Loads an avatar for the issue type. Specify the avatar's local file location in the body of the request. Also, include the following headers: *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers). *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG. For example: `curl --request POST \ --user email@example.com:<api_token> \ --header 'X-Atlassian-Token: no-check' \ --header 'Content-Type: image/< image_type>' \ --data-binary "<@/path/to/file/with/your/avatar>" \ --url 'https://your-domain.atlassian.net/rest/api/2/issuetype/{issueTypeId}'This` The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square's sides is set to the smaller of the height or width of the image. The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size. After creating the avatar, use [ Update issue type](#api-rest-api-2-issuetype-id-put) to set it as the issue type's displayed avatar. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue types
   * @name CreateIssueTypeAvatar
   * @summary Load issue type avatar
   * @request POST:/rest/api/2/issuetype/{id}/avatar2
   * @secure
   */
  createIssueTypeAvatar = (
    id: string,
    query: { x?: number; y?: number; size: number },
    data: any,
    params: RequestParams = {},
  ) =>
    this.request<Avatar, void>({
      path: `/rest/api/2/issuetype/${id}/avatar2`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys of the issue type. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the property keys of any issue type. *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the property keys of any issue types associated with the projects the user has permission to browse.
   *
   * @tags Issue type properties
   * @name GetIssueTypePropertyKeys
   * @summary Get issue type property keys
   * @request GET:/rest/api/2/issuetype/{issueTypeId}/properties
   * @secure
   */
  getIssueTypePropertyKeys = (issueTypeId: string, params: RequestParams = {}) =>
    this.request<PropertyKeys, void>({
      path: `/rest/api/2/issuetype/${issueTypeId}/properties`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the key and value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the details of any issue type. *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the details of any issue types associated with the projects the user has permission to browse.
   *
   * @tags Issue type properties
   * @name GetIssueTypeProperty
   * @summary Get issue type property
   * @request GET:/rest/api/2/issuetype/{issueTypeId}/properties/{propertyKey}
   * @secure
   */
  getIssueTypeProperty = (issueTypeId: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<EntityProperty, void>({
      path: `/rest/api/2/issuetype/${issueTypeId}/properties/${propertyKey}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates or updates the value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). Use this resource to store and update data against an issue type. The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type properties
   * @name SetIssueTypeProperty
   * @summary Set issue type property
   * @request PUT:/rest/api/2/issuetype/{issueTypeId}/properties/{propertyKey}
   * @secure
   */
  setIssueTypeProperty = (issueTypeId: string, propertyKey: string, data: any, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetype/${issueTypeId}/properties/${propertyKey}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type properties
   * @name DeleteIssueTypeProperty
   * @summary Delete issue type property
   * @request DELETE:/rest/api/2/issuetype/{issueTypeId}/properties/{propertyKey}
   * @secure
   */
  deleteIssueTypeProperty = (issueTypeId: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/issuetype/${issueTypeId}/properties/${propertyKey}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of issue type schemes. Only issue type schemes used in classic projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type schemes
   * @name GetAllIssueTypeSchemes
   * @summary Get all issue type schemes
   * @request GET:/rest/api/2/issuetypescheme
   * @secure
   */
  getAllIssueTypeSchemes = (
    query?: { startAt?: number; maxResults?: number; id?: number[] },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanIssueTypeScheme, void>({
      path: `/rest/api/2/issuetypescheme`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates an issue type scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type schemes
   * @name CreateIssueTypeScheme
   * @summary Create issue type scheme
   * @request POST:/rest/api/2/issuetypescheme
   * @secure
   */
  createIssueTypeScheme = (data: IssueTypeSchemeDetails, params: RequestParams = {}) =>
    this.request<IssueTypeSchemeID, void>({
      path: `/rest/api/2/issuetypescheme`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of issue type scheme items. Only issue type scheme items used in classic projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type schemes
   * @name GetIssueTypeSchemesMapping
   * @summary Get issue type scheme items
   * @request GET:/rest/api/2/issuetypescheme/mapping
   * @secure
   */
  getIssueTypeSchemesMapping = (
    query?: { startAt?: number; maxResults?: number; issueTypeSchemeId?: number[] },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanIssueTypeSchemeMapping, void>({
      path: `/rest/api/2/issuetypescheme/mapping`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of issue type schemes and, for each issue type scheme, a list of the projects that use it. Only issue type schemes used in classic projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type schemes
   * @name GetIssueTypeSchemeForProjects
   * @summary Get issue type schemes for projects
   * @request GET:/rest/api/2/issuetypescheme/project
   * @secure
   */
  getIssueTypeSchemeForProjects = (
    query: { startAt?: number; maxResults?: number; projectId: number[] },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanIssueTypeSchemeProjects, void>({
      path: `/rest/api/2/issuetypescheme/project`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Assigns an issue type scheme to a project. If any issues in the project are assigned issue types not present in the new scheme, the operation will fail. To complete the assignment those issues must be updated to use issue types in the new scheme. Issue type schemes can only be assigned to classic projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type schemes
   * @name AssignIssueTypeSchemeToProject
   * @summary Assign issue type scheme to project
   * @request PUT:/rest/api/2/issuetypescheme/project
   * @secure
   */
  assignIssueTypeSchemeToProject = (data: IssueTypeSchemeProjectAssociation, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescheme/project`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates an issue type scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type schemes
   * @name UpdateIssueTypeScheme
   * @summary Update issue type scheme
   * @request PUT:/rest/api/2/issuetypescheme/{issueTypeSchemeId}
   * @secure
   */
  updateIssueTypeScheme = (issueTypeSchemeId: number, data: IssueTypeSchemeUpdateDetails, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescheme/${issueTypeSchemeId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an issue type scheme. Only issue type schemes used in classic projects can be deleted. Any projects assigned to the scheme are reassigned to the default issue type scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type schemes
   * @name DeleteIssueTypeScheme
   * @summary Delete issue type scheme
   * @request DELETE:/rest/api/2/issuetypescheme/{issueTypeSchemeId}
   * @secure
   */
  deleteIssueTypeScheme = (issueTypeSchemeId: number, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescheme/${issueTypeSchemeId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds issue types to an issue type scheme. The added issue types are appended to the issue types list. If any of the issue types exist in the issue type scheme, the operation fails and no issue types are added. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type schemes
   * @name AddIssueTypesToIssueTypeScheme
   * @summary Add issue types to issue type scheme
   * @request PUT:/rest/api/2/issuetypescheme/{issueTypeSchemeId}/issuetype
   * @secure
   */
  addIssueTypesToIssueTypeScheme = (issueTypeSchemeId: number, data: IssueTypeIds, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescheme/${issueTypeSchemeId}/issuetype`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Changes the order of issue types in an issue type scheme. The request body parameters must meet the following requirements: *  all of the issue types must belong to the issue type scheme. *  either `after` or `position` must be provided. *  the issue type in `after` must not be in the issue type list. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type schemes
   * @name ReorderIssueTypesInIssueTypeScheme
   * @summary Change order of issue types
   * @request PUT:/rest/api/2/issuetypescheme/{issueTypeSchemeId}/issuetype/move
   * @secure
   */
  reorderIssueTypesInIssueTypeScheme = (
    issueTypeSchemeId: number,
    data: OrderOfIssueTypes,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescheme/${issueTypeSchemeId}/issuetype/move`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Removes an issue type from an issue type scheme. This operation cannot remove: *  any issue type used by issues. *  any issue types from the default issue type scheme. *  the last standard issue type from an issue type scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type schemes
   * @name RemoveIssueTypeFromIssueTypeScheme
   * @summary Remove issue type from issue type scheme
   * @request DELETE:/rest/api/2/issuetypescheme/{issueTypeSchemeId}/issuetype/{issueTypeId}
   * @secure
   */
  removeIssueTypeFromIssueTypeScheme = (issueTypeSchemeId: number, issueTypeId: number, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescheme/${issueTypeSchemeId}/issuetype/${issueTypeId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of issue type screen schemes. Only issue type screen schemes used in classic projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type screen schemes
   * @name GetIssueTypeScreenSchemes
   * @summary Get issue type screen schemes
   * @request GET:/rest/api/2/issuetypescreenscheme
   * @secure
   */
  getIssueTypeScreenSchemes = (
    query?: { startAt?: number; maxResults?: number; id?: number[] },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanIssueTypeScreenScheme, void>({
      path: `/rest/api/2/issuetypescreenscheme`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates an issue type screen scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type screen schemes
   * @name CreateIssueTypeScreenScheme
   * @summary Create issue type screen scheme
   * @request POST:/rest/api/2/issuetypescreenscheme
   * @secure
   */
  createIssueTypeScreenScheme = (data: IssueTypeScreenSchemeDetails, params: RequestParams = {}) =>
    this.request<IssueTypeScreenSchemeId, void>({
      path: `/rest/api/2/issuetypescreenscheme`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of issue type screen scheme items. Only issue type screen schemes used in classic projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type screen schemes
   * @name GetIssueTypeScreenSchemeMappings
   * @summary Get issue type screen scheme items
   * @request GET:/rest/api/2/issuetypescreenscheme/mapping
   * @secure
   */
  getIssueTypeScreenSchemeMappings = (
    query?: { startAt?: number; maxResults?: number; issueTypeScreenSchemeId?: number[] },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanIssueTypeScreenSchemeItem, void>({
      path: `/rest/api/2/issuetypescreenscheme/mapping`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of issue type screen schemes and, for each issue type screen scheme, a list of the projects that use it. Only issue type screen schemes used in classic projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type screen schemes
   * @name GetIssueTypeScreenSchemeProjectAssociations
   * @summary Get issue type screen schemes for projects
   * @request GET:/rest/api/2/issuetypescreenscheme/project
   * @secure
   */
  getIssueTypeScreenSchemeProjectAssociations = (
    query: { startAt?: number; maxResults?: number; projectId: number[] },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanIssueTypeScreenSchemesProjects, void>({
      path: `/rest/api/2/issuetypescreenscheme/project`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Assigns an issue type screen scheme to a project. Issue type screen schemes can only be assigned to classic projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type screen schemes
   * @name AssignIssueTypeScreenSchemeToProject
   * @summary Assign issue type screen scheme to project
   * @request PUT:/rest/api/2/issuetypescreenscheme/project
   * @secure
   */
  assignIssueTypeScreenSchemeToProject = (data: IssueTypeScreenSchemeProjectAssociation, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescreenscheme/project`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates an issue type screen scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type screen schemes
   * @name UpdateIssueTypeScreenScheme
   * @summary Update issue type screen scheme
   * @request PUT:/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}
   * @secure
   */
  updateIssueTypeScreenScheme = (
    issueTypeScreenSchemeId: string,
    data: IssueTypeScreenSchemeUpdateDetails,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescreenscheme/${issueTypeScreenSchemeId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an issue type screen scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type screen schemes
   * @name DeleteIssueTypeScreenScheme
   * @summary Delete issue type screen scheme
   * @request DELETE:/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}
   * @secure
   */
  deleteIssueTypeScreenScheme = (issueTypeScreenSchemeId: string, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescreenscheme/${issueTypeScreenSchemeId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Appends issue type to screen scheme mappings to an issue type screen scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type screen schemes
   * @name AppendMappingsForIssueTypeScreenScheme
   * @summary Append mappings to issue type screen scheme
   * @request PUT:/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping
   * @secure
   */
  appendMappingsForIssueTypeScreenScheme = (
    issueTypeScreenSchemeId: string,
    data: IssueTypeScreenSchemeMappingDetails,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescreenscheme/${issueTypeScreenSchemeId}/mapping`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates the default screen scheme of an issue type screen scheme. The default screen scheme is used for all unmapped issue types. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type screen schemes
   * @name UpdateDefaultScreenScheme
   * @summary Update issue type screen scheme default screen scheme
   * @request PUT:/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/default
   * @secure
   */
  updateDefaultScreenScheme = (
    issueTypeScreenSchemeId: string,
    data: UpdateDefaultScreenScheme,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescreenscheme/${issueTypeScreenSchemeId}/mapping/default`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Removes issue type to screen scheme mappings from an issue type screen scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type screen schemes
   * @name RemoveMappingsFromIssueTypeScreenScheme
   * @summary Remove mappings from issue type screen scheme
   * @request POST:/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/remove
   * @secure
   */
  removeMappingsFromIssueTypeScreenScheme = (
    issueTypeScreenSchemeId: string,
    data: IssueTypeIds,
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/issuetypescreenscheme/${issueTypeScreenSchemeId}/mapping/remove`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of projects associated with an issue type screen scheme. Only company-managed projects associated with an issue type screen scheme are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue type screen schemes
   * @name GetProjectsForIssueTypeScreenScheme
   * @summary Get issue type screen scheme projects
   * @request GET:/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}/project
   * @secure
   */
  getProjectsForIssueTypeScreenScheme = (
    issueTypeScreenSchemeId: number,
    query?: { startAt?: number; maxResults?: number },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanProjectDetails, void>({
      path: `/rest/api/2/issuetypescreenscheme/${issueTypeScreenSchemeId}/project`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns reference data for JQL searches. This is a downloadable version of the documentation provided in [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ) and [Advanced searching - functions reference](https://confluence.atlassian.com/x/hgORLQ), along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder. To filter visible field details by project or collapse non-unique fields by field type then [Get field reference data (POST)](#api-rest-api-2-jql-autocompletedata-post) can be used. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags JQL
   * @name GetAutoComplete
   * @summary Get field reference data (GET)
   * @request GET:/rest/api/2/jql/autocompletedata
   * @secure
   */
  getAutoComplete = (params: RequestParams = {}) =>
    this.request<JQLReferenceData, void>({
      path: `/rest/api/2/jql/autocompletedata`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns reference data for JQL searches. This is a downloadable version of the documentation provided in [Advanced searching - fields reference](https://confluence.atlassian.com/x/gwORLQ) and [Advanced searching - functions reference](https://confluence.atlassian.com/x/hgORLQ), along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder. This operation can filter the custom fields returned by project. Invalid project IDs in `projectIds` are ignored. System fields are always returned. It can also return the collapsed field for custom fields. Collapsed fields enable searches to be performed across all fields with the same name and of the same field type. For example, the collapsed field `Component - Component[Dropdown]` enables dropdown fields `Component - cf[10061]` and `Component - cf[10062]` to be searched simultaneously. **[Permissions](#permissions) required:** None.
   *
   * @tags JQL
   * @name GetAutoCompletePost
   * @summary Get field reference data (POST)
   * @request POST:/rest/api/2/jql/autocompletedata
   * @secure
   */
  getAutoCompletePost = (data: SearchAutoCompleteFilter, params: RequestParams = {}) =>
    this.request<JQLReferenceData, void>({
      path: `/rest/api/2/jql/autocompletedata`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the JQL search auto complete suggestions for a field. Suggestions can be obtained by providing: *  `fieldName` to get a list of all values for the field. *  `fieldName` and `fieldValue` to get a list of values containing the text in `fieldValue`. *  `fieldName` and `predicateName` to get a list of all predicate values for the field. *  `fieldName`, `predicateName`, and `predicateValue` to get a list of predicate values containing the text in `predicateValue`. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags JQL
   * @name GetFieldAutoCompleteForQueryString
   * @summary Get field auto complete suggestions
   * @request GET:/rest/api/2/jql/autocompletedata/suggestions
   * @secure
   */
  getFieldAutoCompleteForQueryString = (
    query?: { fieldName?: string; fieldValue?: string; predicateName?: string; predicateValue?: string },
    params: RequestParams = {},
  ) =>
    this.request<AutoCompleteSuggestions, void>({
      path: `/rest/api/2/jql/autocompletedata/suggestions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Checks whether one or more issues would be returned by one or more JQL queries. **[Permissions](#permissions) required:** None, however, issues are only matched against JQL queries where the user has: *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue search
   * @name MatchIssues
   * @summary Check issues against JQL
   * @request POST:/rest/api/2/jql/match
   * @secure
   */
  matchIssues = (data: IssuesAndJQLQueries, params: RequestParams = {}) =>
    this.request<IssueMatches, void>({
      path: `/rest/api/2/jql/match`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Parses and validates JQL queries. Validation is performed in context of the current user. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags JQL
   * @name ParseJqlQueries
   * @summary Parse JQL query
   * @request POST:/rest/api/2/jql/parse
   * @secure
   */
  parseJqlQueries = (
    data: JqlQueriesToParse,
    query?: { validation?: 'strict' | 'warn' | 'none' },
    params: RequestParams = {},
  ) =>
    this.request<ParsedJqlQueries, ErrorCollection | void>({
      path: `/rest/api/2/jql/parse`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Converts one or more JQL queries with user identifiers (username or user key) to equivalent JQL queries with account IDs. You may wish to use this operation if your system stores JQL queries and you want to make them GDPR-compliant. For more information about GDPR-related changes, see the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/). **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags JQL
   * @name MigrateQueries
   * @summary Convert user identifiers to account IDs in JQL queries
   * @request POST:/rest/api/2/jql/pdcleaner
   * @secure
   */
  migrateQueries = (data: JQLPersonalDataMigrationRequest, params: RequestParams = {}) =>
    this.request<ConvertedJQLQueries, void>({
      path: `/rest/api/2/jql/pdcleaner`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of labels.
   *
   * @tags Labels
   * @name GetAllLabels
   * @summary Get all labels
   * @request GET:/rest/api/2/label
   * @secure
   */
  getAllLabels = (query?: { startAt?: number; maxResults?: number }, params: RequestParams = {}) =>
    this.request<PageBeanString, any>({
      path: `/rest/api/2/label`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of permissions indicating which permissions the user has. Details of the user's permissions can be obtained in a global, project, or issue context. The user is reported as having a project permission: *  in the global context, if the user has the project permission in any project. *  for a project, where the project permission is determined using issue data, if the user meets the permission's criteria for any issue in the project. Otherwise, if the user has the project permission in the project. *  for an issue, where a project permission is determined using issue data, if the user has the permission in the issue. Otherwise, if the user has the project permission in the project containing the issue. This means that users may be shown as having an issue permission (such as EDIT\_ISSUES) in the global context or a project context but may not have the permission for any or all issues. For example, if Reporters have the EDIT\_ISSUES permission a user would be shown as having this permission in the global context or the context of a project, because any user can be a reporter. However, if they are not the user who reported the issue queried they would not have EDIT\_ISSUES permission for that issue. Global permissions are unaffected by context. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Permissions
   * @name GetMyPermissions
   * @summary Get my permissions
   * @request GET:/rest/api/2/mypermissions
   * @secure
   */
  getMyPermissions = (
    query?: {
      projectKey?: string;
      projectId?: string;
      issueKey?: string;
      issueId?: string;
      permissions?: string;
      projectUuid?: string;
      projectConfigurationUuid?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Permissions, ErrorCollection>({
      path: `/rest/api/2/mypermissions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the value of a preference of the current user. Note that these keys are deprecated: *  *jira.user.locale* The locale of the user. By default this is not set and the user takes the locale of the instance. *  *jira.user.timezone* The time zone of the user. By default this is not set and the user takes the timezone of the instance. Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Myself
   * @name GetPreference
   * @summary Get preference
   * @request GET:/rest/api/2/mypreferences
   * @secure
   */
  getPreference = (query: { key: string }, params: RequestParams = {}) =>
    this.request<string, void>({
      path: `/rest/api/2/mypreferences`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a preference for the user or updates a preference's value by sending a plain text string. For example, `false`. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created: *  *user.notifications.mimetype* The mime type used in notifications sent to the user. Defaults to `html`. *  *user.notify.own.changes* Whether the user gets notified of their own changes. Defaults to `false`. *  *user.default.share.private* Whether new [ filters](https://confluence.atlassian.com/x/eQiiLQ) are set to private. Defaults to `true`. *  *user.keyboard.shortcuts.disabled* Whether keyboard shortcuts are disabled. Defaults to `false`. *  *user.autowatch.disabled* Whether the user automatically watches issues they create or add a comment to. By default, not set: the user takes the instance autowatch setting. Note that these keys are deprecated: *  *jira.user.locale* The locale of the user. By default, not set. The user takes the instance locale. *  *jira.user.timezone* The time zone of the user. By default, not set. The user takes the instance timezone. Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Myself
   * @name SetPreference
   * @summary Set preference
   * @request PUT:/rest/api/2/mypreferences
   * @secure
   */
  setPreference = (query: { key: string }, data: string, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/mypreferences`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a preference of the user, which restores the default value of system defined settings. Note that these keys are deprecated: *  *jira.user.locale* The locale of the user. By default, not set. The user takes the instance locale. *  *jira.user.timezone* The time zone of the user. By default, not set. The user takes the instance timezone. Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Myself
   * @name RemovePreference
   * @summary Delete preference
   * @request DELETE:/rest/api/2/mypreferences
   * @secure
   */
  removePreference = (query: { key: string }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/mypreferences`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns the locale for the user. If the user has no language preference set (which is the default setting) or this resource is accessed anonymous, the browser locale detected by Jira is returned. Jira detects the browser locale using the *Accept-Language* header in the request. However, if this doesn't match a locale available Jira, the site default locale is returned. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Myself
   * @name GetLocale
   * @summary Get locale
   * @request GET:/rest/api/2/mypreferences/locale
   * @secure
   */
  getLocale = (params: RequestParams = {}) =>
    this.request<Locale, void>({
      path: `/rest/api/2/mypreferences/locale`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deprecated, use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API instead. Sets the locale of the user. The locale must be one supported by the instance of Jira. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Myself
   * @name SetLocale
   * @summary Set locale
   * @request PUT:/rest/api/2/mypreferences/locale
   * @deprecated
   * @secure
   */
  setLocale = (data: Locale, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/mypreferences/locale`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deprecated, use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API instead. Deletes the locale of the user, which restores the default setting. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Myself
   * @name DeleteLocale
   * @summary Delete locale
   * @request DELETE:/rest/api/2/mypreferences/locale
   * @deprecated
   * @secure
   */
  deleteLocale = (params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/mypreferences/locale`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns details for the current user. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Myself
   * @name GetCurrentUser
   * @summary Get current user
   * @request GET:/rest/api/2/myself
   * @secure
   */
  getCurrentUser = (query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<User, void>({
      path: `/rest/api/2/myself`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of [notification schemes](https://confluence.atlassian.com/x/8YdKLg) ordered by display name. ### About notification schemes ### A notification scheme is a list of events and recipients who will receive notifications for those events. The list is contained within the `notificationSchemeEvents` object and contains pairs of `events` and `notifications`: *  `event` Identifies the type of event. The events can be [Jira system events](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or [custom events](https://confluence.atlassian.com/x/AIlKLg). *  `notifications` Identifies the [recipients](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-recipientsRecipients) of notifications for each event. Recipients can be any of the following types: *  `CurrentAssignee` *  `Reporter` *  `CurrentUser` *  `ProjectLead` *  `ComponentLead` *  `User` (the `parameter` is the user key) *  `Group` (the `parameter` is the group name) *  `ProjectRole` (the `parameter` is the project role ID) *  `EmailAddress` *  `AllWatchers` *  `UserCustomField` (the `parameter` is the ID of the custom field) *  `GroupCustomField`(the `parameter` is the ID of the custom field) *Note that you should allow for events without recipients to appear in responses.* **[Permissions](#permissions) required:** Permission to access Jira, however the user must have permission to administer at least one project associated with a notification scheme for it to be returned.
   *
   * @tags Issue notification schemes
   * @name GetNotificationSchemes
   * @summary Get notification schemes paginated
   * @request GET:/rest/api/2/notificationscheme
   * @secure
   */
  getNotificationSchemes = (
    query?: { startAt?: number; maxResults?: number; expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanNotificationScheme, void>({
      path: `/rest/api/2/notificationscheme`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [notification scheme](https://confluence.atlassian.com/x/8YdKLg), including the list of events and the recipients who will receive notifications for those events. **[Permissions](#permissions) required:** Permission to access Jira, however the user must have permission to administer at least one project associated with the notification scheme.
   *
   * @tags Issue notification schemes
   * @name GetNotificationScheme
   * @summary Get notification scheme
   * @request GET:/rest/api/2/notificationscheme/{id}
   * @secure
   */
  getNotificationScheme = (id: number, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<NotificationScheme, void>({
      path: `/rest/api/2/notificationscheme/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all permissions, including: *  global permissions. *  project permissions. *  global permissions added by plugins. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Permissions
   * @name GetAllPermissions
   * @summary Get all permissions
   * @request GET:/rest/api/2/permissions
   * @secure
   */
  getAllPermissions = (params: RequestParams = {}) =>
    this.request<Permissions, void>({
      path: `/rest/api/2/permissions`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns: *  for a list of global permissions, the global permissions granted to a user. *  for a list of project permissions and lists of projects and issues, for each project permission a list of the projects and issues a user can access or manipulate. If no account ID is provided, the operation returns details for the logged in user. Note that: *  Invalid project and issue IDs are ignored. *  A maximum of 1000 projects and 1000 issues can be checked. *  Null values in `globalPermissions`, `projectPermissions`, `projectPermissions.projects`, and `projectPermissions.issues` are ignored. *  Empty strings in `projectPermissions.permissions` are ignored. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to check the permissions for other users, otherwise none. However, Connect apps can make a call from the app server to the product to obtain permission details for any user, without admin permission. This Connect app ability doesn't apply to calls made using AP.request() in a browser.
   *
   * @tags Permissions
   * @name GetBulkPermissions
   * @summary Get bulk permissions
   * @request POST:/rest/api/2/permissions/check
   * @secure
   */
  getBulkPermissions = (data: BulkPermissionsRequestBean, params: RequestParams = {}) =>
    this.request<BulkPermissionGrants, ErrorCollection>({
      path: `/rest/api/2/permissions/check`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all the projects where the user is granted a list of project permissions. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Permissions
   * @name GetPermittedProjects
   * @summary Get permitted projects
   * @request POST:/rest/api/2/permissions/project
   * @secure
   */
  getPermittedProjects = (data: PermissionsKeysBean, params: RequestParams = {}) =>
    this.request<PermittedProjects, void>({
      path: `/rest/api/2/permissions/project`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all permission schemes. ### About permission schemes and grants ### A permission scheme is a collection of permission grants. A permission grant consists of a `holder` and a `permission`. #### Holder object #### The `holder` object contains information about the user or group being granted the permission. For example, the *Administer projects* permission is granted to a group named *Teams in space administrators*. In this case, the type is `"type": "group"`, and the parameter is the group name, `"parameter": "Teams in space administrators"`. The `holder` object is defined by the following properties: *  `type` Identifies the user or group (see the list of types below). *  `parameter` The value of this property depends on the `type`. For example, if the `type` is a group, then you need to specify the group name. The following `types` are available. The expected values for the `parameter` are given in parenthesis (some `types` may not have a `parameter`): *  `anyone` Grant for anonymous users. *  `applicationRole` Grant for users with access to the specified application (application name). See [Update product access settings](https://confluence.atlassian.com/x/3YxjL) for more information. *  `assignee` Grant for the user currently assigned to an issue. *  `group` Grant for the specified group (group name). *  `groupCustomField` Grant for a user in the group selected in the specified custom field (custom field ID). *  `projectLead` Grant for a project lead. *  `projectRole` Grant for the specified project role (project role ID). *  `reporter` Grant for the user who reported the issue. *  `sd.customer.portal.only` Jira Service Desk only. Grants customers permission to access the customer portal but not Jira. See [Customizing Jira Service Desk permissions](https://confluence.atlassian.com/x/24dKLg) for more information. *  `user` Grant for the specified user (user ID - historically this was the userkey but that is deprecated and the account ID should be used). *  `userCustomField` Grant for a user selected in the specified custom field (custom field ID). #### Built-in permissions #### The [built-in Jira permissions](https://confluence.atlassian.com/x/yodKLg) are listed below. Apps can also define custom permissions. See the [project permission](https://developer.atlassian.com/cloud/jira/platform/modules/project-permission/) and [global permission](https://developer.atlassian.com/cloud/jira/platform/modules/global-permission/) module documentation for more information. **Project permissions** *  `ADMINISTER_PROJECTS` *  `BROWSE_PROJECTS` *  `MANAGE_SPRINTS_PERMISSION` (Jira Software only) *  `SERVICEDESK_AGENT` (Jira Service Desk only) *  `VIEW_DEV_TOOLS` (Jira Software only) *  `VIEW_READONLY_WORKFLOW` **Issue permissions** *  `ASSIGNABLE_USER` *  `ASSIGN_ISSUES` *  `CLOSE_ISSUES` *  `CREATE_ISSUES` *  `DELETE_ISSUES` *  `EDIT_ISSUES` *  `LINK_ISSUES` *  `MODIFY_REPORTER` *  `MOVE_ISSUES` *  `RESOLVE_ISSUES` *  `SCHEDULE_ISSUES` *  `SET_ISSUE_SECURITY` *  `TRANSITION_ISSUES` **Voters and watchers permissions** *  `MANAGE_WATCHERS` *  `VIEW_VOTERS_AND_WATCHERS` **Comments permissions** *  `ADD_COMMENTS` *  `DELETE_ALL_COMMENTS` *  `DELETE_OWN_COMMENTS` *  `EDIT_ALL_COMMENTS` *  `EDIT_OWN_COMMENTS` **Attachments permissions** *  `CREATE_ATTACHMENTS` *  `DELETE_ALL_ATTACHMENTS` *  `DELETE_OWN_ATTACHMENTS` **Time tracking permissions** *  `DELETE_ALL_WORKLOGS` *  `DELETE_OWN_WORKLOGS` *  `EDIT_ALL_WORKLOGS` *  `EDIT_OWN_WORKLOGS` *  `WORK_ON_ISSUES` **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Permission schemes
   * @name GetAllPermissionSchemes
   * @summary Get all permission schemes
   * @request GET:/rest/api/2/permissionscheme
   * @secure
   */
  getAllPermissionSchemes = (query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<PermissionSchemes, void>({
      path: `/rest/api/2/permissionscheme`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Permission schemes
   * @name CreatePermissionScheme
   * @summary Create permission scheme
   * @request POST:/rest/api/2/permissionscheme
   * @secure
   */
  createPermissionScheme = (data: PermissionScheme, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<PermissionScheme, void>({
      path: `/rest/api/2/permissionscheme`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a permission scheme. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Permission schemes
   * @name GetPermissionScheme
   * @summary Get permission scheme
   * @request GET:/rest/api/2/permissionscheme/{schemeId}
   * @secure
   */
  getPermissionScheme = (schemeId: number, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<PermissionScheme, void>({
      path: `/rest/api/2/permissionscheme/${schemeId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a permission scheme. Below are some important things to note when using this resource: *  If a permissions list is present in the request, then it is set in the permission scheme, overwriting *all existing* grants. *  If you want to update only the name and description, then do not send a permissions list in the request. *  Sending an empty list will remove all permission grants from the permission scheme. If you want to add or delete a permission grant instead of updating the whole list, see [Create permission grant](#api-rest-api-2-permissionscheme-schemeId-permission-post) or [Delete permission scheme entity](#api-rest-api-2-permissionscheme-schemeId-permission-permissionId-delete). See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more details. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Permission schemes
   * @name UpdatePermissionScheme
   * @summary Update permission scheme
   * @request PUT:/rest/api/2/permissionscheme/{schemeId}
   * @secure
   */
  updatePermissionScheme = (
    schemeId: number,
    data: PermissionScheme,
    query?: { expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<PermissionScheme, void>({
      path: `/rest/api/2/permissionscheme/${schemeId}`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a permission scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Permission schemes
   * @name DeletePermissionScheme
   * @summary Delete permission scheme
   * @request DELETE:/rest/api/2/permissionscheme/{schemeId}
   * @secure
   */
  deletePermissionScheme = (schemeId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/permissionscheme/${schemeId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns all permission grants for a permission scheme. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Permission schemes
   * @name GetPermissionSchemeGrants
   * @summary Get permission scheme grants
   * @request GET:/rest/api/2/permissionscheme/{schemeId}/permission
   * @secure
   */
  getPermissionSchemeGrants = (schemeId: number, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<PermissionGrants, void>({
      path: `/rest/api/2/permissionscheme/${schemeId}/permission`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a permission grant in a permission scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Permission schemes
   * @name CreatePermissionGrant
   * @summary Create permission grant
   * @request POST:/rest/api/2/permissionscheme/{schemeId}/permission
   * @secure
   */
  createPermissionGrant = (
    schemeId: number,
    data: PermissionGrant,
    query?: { expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<PermissionGrant, void>({
      path: `/rest/api/2/permissionscheme/${schemeId}/permission`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a permission grant. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Permission schemes
   * @name GetPermissionSchemeGrant
   * @summary Get permission scheme grant
   * @request GET:/rest/api/2/permissionscheme/{schemeId}/permission/{permissionId}
   * @secure
   */
  getPermissionSchemeGrant = (
    schemeId: number,
    permissionId: number,
    query?: { expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<PermissionGrant, void>({
      path: `/rest/api/2/permissionscheme/${schemeId}/permission/${permissionId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a permission grant from a permission scheme. See [About permission schemes and grants](../api-group-permission-schemes/#about-permission-schemes-and-grants) for more details. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Permission schemes
   * @name DeletePermissionSchemeEntity
   * @summary Delete permission scheme grant
   * @request DELETE:/rest/api/2/permissionscheme/{schemeId}/permission/{permissionId}
   * @secure
   */
  deletePermissionSchemeEntity = (schemeId: number, permissionId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/permissionscheme/${schemeId}/permission/${permissionId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns the list of all issue priorities. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Issue priorities
   * @name GetPriorities
   * @summary Get priorities
   * @request GET:/rest/api/2/priority
   * @secure
   */
  getPriorities = (params: RequestParams = {}) =>
    this.request<Priority[], void>({
      path: `/rest/api/2/priority`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns an issue priority. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Issue priorities
   * @name GetPriority
   * @summary Get priority
   * @request GET:/rest/api/2/priority/{id}
   * @secure
   */
  getPriority = (id: string, params: RequestParams = {}) =>
    this.request<Priority, void>({
      path: `/rest/api/2/priority/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all projects visible to the user. Deprecated, use [ Get projects paginated](#api-rest-api-2-project-search-get) that supports search and pagination. This operation can be accessed anonymously. **[Permissions](#permissions) required:** Projects are returned only where the user has *Browse Projects* or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Projects
   * @name GetAllProjects
   * @summary Get all projects
   * @request GET:/rest/api/2/project
   * @deprecated
   * @secure
   */
  getAllProjects = (query?: { expand?: string; recent?: number; properties?: string[] }, params: RequestParams = {}) =>
    this.request<Project[], void>({
      path: `/rest/api/2/project`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a project based on a project type template, as shown in the following table: | Project Type Key | Project Template Key | |--|--| | `business` | `com.atlassian.jira-core-project-templates:jira-core-simplified-content-management`, `com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval`, `com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking`, `com.atlassian.jira-core-project-templates:jira-core-simplified-process-control`, `com.atlassian.jira-core-project-templates:jira-core-simplified-procurement`, `com.atlassian.jira-core-project-templates:jira-core-simplified-project-management`, `com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment`, `com.atlassian.jira-core-project-templates:jira-core-simplified-task-tracking` | | `service_desk` | `com.atlassian.servicedesk:simplified-it-service-management`, `com.atlassian.servicedesk:simplified-general-service-desk`, `com.atlassian.servicedesk:simplified-internal-service-desk`, `com.atlassian.servicedesk:simplified-external-service-desk`, `com.atlassian.servicedesk:simplified-hr-service-desk`, `com.atlassian.servicedesk:simplified-facilities-service-desk`, `com.atlassian.servicedesk:simplified-legal-service-desk` | | `software` | `com.pyxis.greenhopper.jira:gh-simplified-agility-kanban`, `com.pyxis.greenhopper.jira:gh-simplified-agility-scrum`, `com.pyxis.greenhopper.jira:gh-simplified-basic`, `com.pyxis.greenhopper.jira:gh-simplified-kanban-classic`, `com.pyxis.greenhopper.jira:gh-simplified-scrum-classic` | The project types are available according to the installed Jira features as follows: *  Jira Core, the default, enables `business` projects. *  Jira Service Management enables `service_desk` projects. *  Jira Software enables `software` projects. To determine which features are installed, go to **Jira settings** > **Apps** > **Manage apps** and review the System Apps list. To add Jira Software or Jira Service Management into a JIRA instance, use **Jira settings** > **Apps** > **Finding new apps**. For more information, see [ Managing add-ons](https://confluence.atlassian.com/x/S31NLg). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Projects
   * @name CreateProject
   * @summary Create project
   * @request POST:/rest/api/2/project
   * @secure
   */
  createProject = (data: CreateProjectDetails, params: RequestParams = {}) =>
    this.request<ProjectIdentifiers, void>({
      path: `/rest/api/2/project`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of up to 20 projects recently viewed by the user that are still visible to the user. This operation can be accessed anonymously. **[Permissions](#permissions) required:** Projects are returned only where the user has one of: *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project. *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project. *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Projects
   * @name GetRecent
   * @summary Get recent projects
   * @request GET:/rest/api/2/project/recent
   * @secure
   */
  getRecent = (query?: { expand?: string; properties?: StringList[] }, params: RequestParams = {}) =>
    this.request<Project[], void>({
      path: `/rest/api/2/project/recent`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of projects visible to the user. This operation can be accessed anonymously. **[Permissions](#permissions) required:** Projects are returned only where the user has one of: *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project. *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project. *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Projects
   * @name SearchProjects
   * @summary Get projects paginated
   * @request GET:/rest/api/2/project/search
   * @secure
   */
  searchProjects = (
    query?: {
      startAt?: number;
      maxResults?: number;
      orderBy?:
        | 'category'
        | '-category'
        | '+category'
        | 'key'
        | '-key'
        | '+key'
        | 'name'
        | '-name'
        | '+name'
        | 'owner'
        | '-owner'
        | '+owner'
        | 'issueCount'
        | '-issueCount'
        | '+issueCount'
        | 'lastIssueUpdatedDate'
        | '-lastIssueUpdatedDate'
        | '+lastIssueUpdatedDate'
        | 'archivedDate'
        | '+archivedDate'
        | '-archivedDate'
        | 'deletedDate'
        | '+deletedDate'
        | '-deletedDate';
      id?: number[];
      keys?: string[];
      query?: string;
      typeKey?: string;
      categoryId?: number;
      action?: 'view' | 'browse' | 'edit';
      expand?: string;
      status?: ('live' | 'archived' | 'deleted')[];
      properties?: StringList[];
      propertyQuery?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanProject, void>({
      path: `/rest/api/2/project/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all [project types](https://confluence.atlassian.com/x/Var1Nw), whether or not the instance has a valid license for each type. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Project types
   * @name GetAllProjectTypes
   * @summary Get all project types
   * @request GET:/rest/api/2/project/type
   * @secure
   */
  getAllProjectTypes = (params: RequestParams = {}) =>
    this.request<ProjectType[], void>({
      path: `/rest/api/2/project/type`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all [project types](https://confluence.atlassian.com/x/Var1Nw) with a valid license.
   *
   * @tags Project types
   * @name GetAllAccessibleProjectTypes
   * @summary Get licensed project types
   * @request GET:/rest/api/2/project/type/accessible
   * @secure
   */
  getAllAccessibleProjectTypes = (params: RequestParams = {}) =>
    this.request<ProjectType[], any>({
      path: `/rest/api/2/project/type/accessible`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [project type](https://confluence.atlassian.com/x/Var1Nw). This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Project types
   * @name GetProjectTypeByKey
   * @summary Get project type by key
   * @request GET:/rest/api/2/project/type/{projectTypeKey}
   * @secure
   */
  getProjectTypeByKey = (
    projectTypeKey: 'software' | 'service_desk' | 'business' | 'product_discovery',
    params: RequestParams = {},
  ) =>
    this.request<ProjectType, void>({
      path: `/rest/api/2/project/type/${projectTypeKey}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [project type](https://confluence.atlassian.com/x/Var1Nw) if it is accessible to the user. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Project types
   * @name GetAccessibleProjectTypeByKey
   * @summary Get accessible project type by key
   * @request GET:/rest/api/2/project/type/{projectTypeKey}/accessible
   * @secure
   */
  getAccessibleProjectTypeByKey = (
    projectTypeKey: 'software' | 'service_desk' | 'business' | 'product_discovery',
    params: RequestParams = {},
  ) =>
    this.request<ProjectType, void>({
      path: `/rest/api/2/project/type/${projectTypeKey}/accessible`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the [project details](https://confluence.atlassian.com/x/ahLpNw) for a project. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Projects
   * @name GetProject
   * @summary Get project
   * @request GET:/rest/api/2/project/{projectIdOrKey}
   * @secure
   */
  getProject = (
    projectIdOrKey: string,
    query?: { expand?: string; properties?: string[] },
    params: RequestParams = {},
  ) =>
    this.request<Project, void>({
      path: `/rest/api/2/project/${projectIdOrKey}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates the [project details](https://confluence.atlassian.com/x/ahLpNw) of a project. All parameters are optional in the body of the request. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Projects
   * @name UpdateProject
   * @summary Update project
   * @request PUT:/rest/api/2/project/{projectIdOrKey}
   * @secure
   */
  updateProject = (
    projectIdOrKey: string,
    data: UpdateProjectDetails,
    query?: { expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<Project, void>({
      path: `/rest/api/2/project/${projectIdOrKey}`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a project. You can't delete a project if it's archived. To delete an archived project, restore the project and then delete it. To restore a project, use the Jira UI. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Projects
   * @name DeleteProject
   * @summary Delete project
   * @request DELETE:/rest/api/2/project/{projectIdOrKey}
   * @secure
   */
  deleteProject = (projectIdOrKey: string, query?: { enableUndo?: boolean }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/project/${projectIdOrKey}`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Archives a project. You can't delete a project if it's archived. To delete an archived project, restore the project and then delete it. To restore a project, use the Jira UI. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Projects
   * @name ArchiveProject
   * @summary Archive project
   * @request POST:/rest/api/2/project/{projectIdOrKey}/archive
   * @secure
   */
  archiveProject = (projectIdOrKey: string, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/archive`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the avatar displayed for a project. Use [Load project avatar](#api-rest-api-2-project-projectIdOrKey-avatar2-post) to store avatars against the project, before using this operation to set the displayed avatar. **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
   *
   * @tags Project avatars
   * @name UpdateProjectAvatar
   * @summary Set project avatar
   * @request PUT:/rest/api/2/project/{projectIdOrKey}/avatar
   * @secure
   */
  updateProjectAvatar = (projectIdOrKey: string, data: Avatar, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/avatar`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a custom avatar from a project. Note that system avatars cannot be deleted. **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
   *
   * @tags Project avatars
   * @name DeleteProjectAvatar
   * @summary Delete project avatar
   * @request DELETE:/rest/api/2/project/{projectIdOrKey}/avatar/{id}
   * @secure
   */
  deleteProjectAvatar = (projectIdOrKey: string, id: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/avatar/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Loads an avatar for a project. Specify the avatar's local file location in the body of the request. Also, include the following headers: *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers). *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG. For example: `curl --request POST ` `--user email@example.com:<api_token> ` `--header 'X-Atlassian-Token: no-check' ` `--header 'Content-Type: image/< image_type>' ` `--data-binary "<@/path/to/file/with/your/avatar>" ` `--url 'https://your-domain.atlassian.net/rest/api/2/project/{projectIdOrKey}/avatar2'` The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square's sides is set to the smaller of the height or width of the image. The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size. After creating the avatar use [Set project avatar](#api-rest-api-2-project-projectIdOrKey-avatar-put) to set it as the project's displayed avatar. **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
   *
   * @tags Project avatars
   * @name CreateProjectAvatar
   * @summary Load project avatar
   * @request POST:/rest/api/2/project/{projectIdOrKey}/avatar2
   * @secure
   */
  createProjectAvatar = (
    projectIdOrKey: string,
    data: any,
    query?: { x?: number; y?: number; size?: number },
    params: RequestParams = {},
  ) =>
    this.request<Avatar, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/avatar2`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all project avatars, grouped by system and custom avatars. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Project avatars
   * @name GetAllProjectAvatars
   * @summary Get all project avatars
   * @request GET:/rest/api/2/project/{projectIdOrKey}/avatars
   * @secure
   */
  getAllProjectAvatars = (projectIdOrKey: string, params: RequestParams = {}) =>
    this.request<ProjectAvatars, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/avatars`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of all components in a project. See the [Get project components](#api-rest-api-2-project-projectIdOrKey-components-get) resource if you want to get a full list of versions without pagination. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Project components
   * @name GetProjectComponentsPaginated
   * @summary Get project components paginated
   * @request GET:/rest/api/2/project/{projectIdOrKey}/component
   * @secure
   */
  getProjectComponentsPaginated = (
    projectIdOrKey: string,
    query?: {
      startAt?: number;
      maxResults?: number;
      orderBy?:
        | 'description'
        | '-description'
        | '+description'
        | 'issueCount'
        | '-issueCount'
        | '+issueCount'
        | 'lead'
        | '-lead'
        | '+lead'
        | 'name'
        | '-name'
        | '+name';
      query?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanComponentWithIssueCount, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/component`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all components in a project. See the [Get project components paginated](#api-rest-api-2-project-projectIdOrKey-component-get) resource if you want to get a full list of components with pagination. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Project components
   * @name GetProjectComponents
   * @summary Get project components
   * @request GET:/rest/api/2/project/{projectIdOrKey}/components
   * @secure
   */
  getProjectComponents = (projectIdOrKey: string, params: RequestParams = {}) =>
    this.request<ProjectComponent[], void>({
      path: `/rest/api/2/project/${projectIdOrKey}/components`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a project asynchronously. This operation is: *  transactional, that is, if part of the delete fails the project is not deleted. *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Projects
   * @name DeleteProjectAsynchronously
   * @summary Delete project asynchronously
   * @request POST:/rest/api/2/project/{projectIdOrKey}/delete
   * @secure
   */
  deleteProjectAsynchronously = (projectIdOrKey: string, params: RequestParams = {}) =>
    this.request<any, TaskProgressBeanObject | void>({
      path: `/rest/api/2/project/${projectIdOrKey}/delete`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * @description Returns the list of features for a project.
   *
   * @tags Project features
   * @name GetFeaturesForProject
   * @summary Get project features
   * @request GET:/rest/api/2/project/{projectIdOrKey}/features
   * @secure
   */
  getFeaturesForProject = (projectIdOrKey: string, params: RequestParams = {}) =>
    this.request<ContainerForProjectFeatures, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/features`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the state of a project feature.
   *
   * @tags Project features
   * @name ToggleFeatureForProject
   * @summary Set project feature state
   * @request PUT:/rest/api/2/project/{projectIdOrKey}/features/{featureKey}
   * @secure
   */
  toggleFeatureForProject = (
    projectIdOrKey: string,
    featureKey: string,
    data: ProjectFeatureState,
    params: RequestParams = {},
  ) =>
    this.request<ContainerForProjectFeatures, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/features/${featureKey}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys for the project. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Project properties
   * @name GetProjectPropertyKeys
   * @summary Get project property keys
   * @request GET:/rest/api/2/project/{projectIdOrKey}/properties
   * @secure
   */
  getProjectPropertyKeys = (projectIdOrKey: string, params: RequestParams = {}) =>
    this.request<PropertyKeys, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/properties`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the value of a [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
   *
   * @tags Project properties
   * @name GetProjectProperty
   * @summary Get project property
   * @request GET:/rest/api/2/project/{projectIdOrKey}/properties/{propertyKey}
   * @secure
   */
  getProjectProperty = (projectIdOrKey: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<EntityProperty, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/properties/${propertyKey}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the value of the [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). You can use project properties to store custom data against the project. The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the property is created.
   *
   * @tags Project properties
   * @name SetProjectProperty
   * @summary Set project property
   * @request PUT:/rest/api/2/project/{projectIdOrKey}/properties/{propertyKey}
   * @secure
   */
  setProjectProperty = (projectIdOrKey: string, propertyKey: string, data: any, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/properties/${propertyKey}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes the [property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) from a project. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
   *
   * @tags Project properties
   * @name DeleteProjectProperty
   * @summary Delete project property
   * @request DELETE:/rest/api/2/project/{projectIdOrKey}/properties/{propertyKey}
   * @secure
   */
  deleteProjectProperty = (projectIdOrKey: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/properties/${propertyKey}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Restores a project from the Jira recycle bin. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Projects
   * @name Restore
   * @summary Restore deleted project
   * @request POST:/rest/api/2/project/{projectIdOrKey}/restore
   * @secure
   */
  restore = (projectIdOrKey: string, params: RequestParams = {}) =>
    this.request<Project, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/restore`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of [project roles](https://confluence.atlassian.com/x/3odKLg) for the project returning the name and self URL for each role. Note that all project roles are shared with all projects in Jira Cloud. See [Get all project roles](#api-rest-api-2-role-get) for more information. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for any project on the site or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project roles
   * @name GetProjectRoles
   * @summary Get project roles for project
   * @request GET:/rest/api/2/project/{projectIdOrKey}/role
   * @secure
   */
  getProjectRoles = (projectIdOrKey: string, params: RequestParams = {}) =>
    this.request<Record<string, string>, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/role`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a project role's details and actors associated with the project. The list of actors is sorted by display name. To check whether a user belongs to a role based on their group memberships, use [Get user](#api-rest-api-2-user-get) with the `groups` expand parameter selected. Then check whether the user keys and groups match with the actors returned for the project. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project roles
   * @name GetProjectRole
   * @summary Get project role for project
   * @request GET:/rest/api/2/project/{projectIdOrKey}/role/{id}
   * @secure
   */
  getProjectRole = (projectIdOrKey: string, id: number, params: RequestParams = {}) =>
    this.request<ProjectRole, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/role/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the actors for a project role for a project, replacing all existing actors. To add actors to the project without overwriting the existing list, use [Add actors to project role](#api-rest-api-2-project-projectIdOrKey-role-id-post). **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project role actors
   * @name SetActors
   * @summary Set actors for project role
   * @request PUT:/rest/api/2/project/{projectIdOrKey}/role/{id}
   * @secure
   */
  setActors = (projectIdOrKey: string, id: number, data: ProjectRoleActorsUpdateBean, params: RequestParams = {}) =>
    this.request<ProjectRole, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/role/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds actors to a project role for the project. To replace all actors for the project, use [Set actors for project role](#api-rest-api-2-project-projectIdOrKey-role-id-put). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project role actors
   * @name AddActorUsers
   * @summary Add actors to project role
   * @request POST:/rest/api/2/project/{projectIdOrKey}/role/{id}
   * @secure
   */
  addActorUsers = (projectIdOrKey: string, id: number, data: ActorsMap, params: RequestParams = {}) =>
    this.request<ProjectRole, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/role/${id}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes actors from a project role for the project. To remove default actors from the project role, use [Delete default actors from project role](#api-rest-api-2-role-id-actors-delete). This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project role actors
   * @name DeleteActor
   * @summary Delete actors from project role
   * @request DELETE:/rest/api/2/project/{projectIdOrKey}/role/{id}
   * @secure
   */
  deleteActor = (
    projectIdOrKey: string,
    id: number,
    query?: { user?: string; group?: string },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/role/${id}`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns all [project roles](https://confluence.atlassian.com/x/3odKLg) and the details for each role. Note that the list of project roles is common to all projects. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Project roles
   * @name GetProjectRoleDetails
   * @summary Get project role details
   * @request GET:/rest/api/2/project/{projectIdOrKey}/roledetails
   * @secure
   */
  getProjectRoleDetails = (
    projectIdOrKey: string,
    query?: { currentMember?: boolean; excludeConnectAddons?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<ProjectRoleDetails[], void>({
      path: `/rest/api/2/project/${projectIdOrKey}/roledetails`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the valid statuses for a project. The statuses are grouped by issue type, as each project has a set of valid issue types and each issue type has a set of valid statuses. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Projects
   * @name GetAllStatuses
   * @summary Get all statuses for project
   * @request GET:/rest/api/2/project/{projectIdOrKey}/statuses
   * @secure
   */
  getAllStatuses = (projectIdOrKey: string, params: RequestParams = {}) =>
    this.request<IssueTypeWithStatus[], void>({
      path: `/rest/api/2/project/${projectIdOrKey}/statuses`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deprecated, this feature is no longer supported and no alternatives are available, see [Convert project to a different template or type](https://confluence.atlassian.com/x/yEKeOQ). Updates a [project type](https://confluence.atlassian.com/x/GwiiLQ). The project type can be updated for classic projects only, project type cannot be updated for next-gen projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Projects
   * @name UpdateProjectType
   * @summary Update project type
   * @request PUT:/rest/api/2/project/{projectIdOrKey}/type/{newProjectTypeKey}
   * @deprecated
   * @secure
   */
  updateProjectType = (
    projectIdOrKey: string,
    newProjectTypeKey: 'software' | 'service_desk' | 'business',
    params: RequestParams = {},
  ) =>
    this.request<Project, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/type/${newProjectTypeKey}`,
      method: 'PUT',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of all versions in a project. See the [Get project versions](#api-rest-api-2-project-projectIdOrKey-versions-get) resource if you want to get a full list of versions without pagination. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Project versions
   * @name GetProjectVersionsPaginated
   * @summary Get project versions paginated
   * @request GET:/rest/api/2/project/{projectIdOrKey}/version
   * @secure
   */
  getProjectVersionsPaginated = (
    projectIdOrKey: string,
    query?: {
      startAt?: number;
      maxResults?: number;
      orderBy?:
        | 'description'
        | '-description'
        | '+description'
        | 'name'
        | '-name'
        | '+name'
        | 'releaseDate'
        | '-releaseDate'
        | '+releaseDate'
        | 'sequence'
        | '-sequence'
        | '+sequence'
        | 'startDate'
        | '-startDate'
        | '+startDate';
      query?: string;
      status?: string;
      expand?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanVersion, void>({
      path: `/rest/api/2/project/${projectIdOrKey}/version`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all versions in a project. The response is not paginated. Use [Get project versions paginated](#api-rest-api-2-project-projectIdOrKey-version-get) if you want to get the versions in a project with pagination. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Project versions
   * @name GetProjectVersions
   * @summary Get project versions
   * @request GET:/rest/api/2/project/{projectIdOrKey}/versions
   * @secure
   */
  getProjectVersions = (projectIdOrKey: string, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Version[], void>({
      path: `/rest/api/2/project/${projectIdOrKey}/versions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the [project's sender email address](https://confluence.atlassian.com/x/dolKLg). **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Project email
   * @name GetProjectEmail
   * @summary Get project's sender email
   * @request GET:/rest/api/2/project/{projectId}/email
   * @secure
   */
  getProjectEmail = (projectId: number, params: RequestParams = {}) =>
    this.request<ProjectEmailAddress, void>({
      path: `/rest/api/2/project/${projectId}/email`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the [project's sender email address](https://confluence.atlassian.com/x/dolKLg). If `emailAddress` is an empty string, the default email address is restored. **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Project email
   * @name UpdateProjectEmail
   * @summary Set project's sender email
   * @request PUT:/rest/api/2/project/{projectId}/email
   * @secure
   */
  updateProjectEmail = (projectId: number, data: ProjectEmailAddress, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/project/${projectId}/email`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Get the issue type hierarchy for a next-gen project. The issue type hierarchy for a project consists of: *  *Epic* at level 1 (optional). *  One or more issue types at level 0 such as *Story*, *Task*, or *Bug*. Where the issue type *Epic* is defined, these issue types are used to break down the content of an epic. *  *Subtask* at level -1 (optional). This issue type enables level 0 issue types to be broken down into components. Issues based on a level -1 issue type must have a parent issue. **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   *
   * @tags Projects
   * @name GetHierarchy
   * @summary Get project issue type hierarchy
   * @request GET:/rest/api/2/project/{projectId}/hierarchy
   * @deprecated
   * @secure
   */
  getHierarchy = (projectId: number, params: RequestParams = {}) =>
    this.request<ProjectIssueTypeHierarchy, void>({
      path: `/rest/api/2/project/${projectId}/hierarchy`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the [issue security scheme](https://confluence.atlassian.com/x/J4lKLg) associated with the project. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or the *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
   *
   * @tags Project permission schemes
   * @name GetProjectIssueSecurityScheme
   * @summary Get project issue security scheme
   * @request GET:/rest/api/2/project/{projectKeyOrId}/issuesecuritylevelscheme
   * @secure
   */
  getProjectIssueSecurityScheme = (projectKeyOrId: string, params: RequestParams = {}) =>
    this.request<SecurityScheme, void>({
      path: `/rest/api/2/project/${projectKeyOrId}/issuesecuritylevelscheme`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Gets a [notification scheme](https://confluence.atlassian.com/x/8YdKLg) associated with the project. See the [Get notification scheme](#api-rest-api-2-notificationscheme-id-get) resource for more information about notification schemes. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
   *
   * @tags Projects
   * @name GetNotificationSchemeForProject
   * @summary Get project notification scheme
   * @request GET:/rest/api/2/project/{projectKeyOrId}/notificationscheme
   * @secure
   */
  getNotificationSchemeForProject = (projectKeyOrId: string, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<NotificationScheme, void>({
      path: `/rest/api/2/project/${projectKeyOrId}/notificationscheme`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Gets the [permission scheme](https://confluence.atlassian.com/x/yodKLg) associated with the project. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
   *
   * @tags Project permission schemes
   * @name GetAssignedPermissionScheme
   * @summary Get assigned permission scheme
   * @request GET:/rest/api/2/project/{projectKeyOrId}/permissionscheme
   * @secure
   */
  getAssignedPermissionScheme = (projectKeyOrId: string, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<PermissionScheme, void>({
      path: `/rest/api/2/project/${projectKeyOrId}/permissionscheme`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Assigns a permission scheme with a project. See [Managing project permissions](https://confluence.atlassian.com/x/yodKLg) for more information about permission schemes. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)
   *
   * @tags Project permission schemes
   * @name AssignPermissionScheme
   * @summary Assign permission scheme
   * @request PUT:/rest/api/2/project/{projectKeyOrId}/permissionscheme
   * @secure
   */
  assignPermissionScheme = (
    projectKeyOrId: string,
    data: IdBean,
    query?: { expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<PermissionScheme, void>({
      path: `/rest/api/2/project/${projectKeyOrId}/permissionscheme`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all [issue security](https://confluence.atlassian.com/x/J4lKLg) levels for the project that the user has access to. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project, however, issue security levels are only returned for authenticated user with *Set Issue Security* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project.
   *
   * @tags Project permission schemes
   * @name GetSecurityLevelsForProject
   * @summary Get project issue security levels
   * @request GET:/rest/api/2/project/{projectKeyOrId}/securitylevel
   * @secure
   */
  getSecurityLevelsForProject = (projectKeyOrId: string, params: RequestParams = {}) =>
    this.request<ProjectIssueSecurityLevels, void>({
      path: `/rest/api/2/project/${projectKeyOrId}/securitylevel`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all project categories. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Project categories
   * @name GetAllProjectCategories
   * @summary Get all project categories
   * @request GET:/rest/api/2/projectCategory
   * @secure
   */
  getAllProjectCategories = (params: RequestParams = {}) =>
    this.request<ProjectCategory[], void>({
      path: `/rest/api/2/projectCategory`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a project category. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project categories
   * @name CreateProjectCategory
   * @summary Create project category
   * @request POST:/rest/api/2/projectCategory
   * @secure
   */
  createProjectCategory = (data: ProjectCategory, params: RequestParams = {}) =>
    this.request<ProjectCategory, void>({
      path: `/rest/api/2/projectCategory`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a project category. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Project categories
   * @name GetProjectCategoryById
   * @summary Get project category by ID
   * @request GET:/rest/api/2/projectCategory/{id}
   * @secure
   */
  getProjectCategoryById = (id: number, params: RequestParams = {}) =>
    this.request<ProjectCategory, void>({
      path: `/rest/api/2/projectCategory/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a project category. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project categories
   * @name UpdateProjectCategory
   * @summary Update project category
   * @request PUT:/rest/api/2/projectCategory/{id}
   * @secure
   */
  updateProjectCategory = (id: number, data: ProjectCategory, params: RequestParams = {}) =>
    this.request<UpdatedProjectCategory, void>({
      path: `/rest/api/2/projectCategory/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a project category. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project categories
   * @name RemoveProjectCategory
   * @summary Delete project category
   * @request DELETE:/rest/api/2/projectCategory/{id}
   * @secure
   */
  removeProjectCategory = (id: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/projectCategory/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Validates a project key by confirming the key is a valid string and not in use. **[Permissions](#permissions) required:** None.
   *
   * @tags Project key and name validation
   * @name ValidateProjectKey
   * @summary Validate project key
   * @request GET:/rest/api/2/projectvalidate/key
   * @secure
   */
  validateProjectKey = (query?: { key?: string }, params: RequestParams = {}) =>
    this.request<ErrorCollection, void>({
      path: `/rest/api/2/projectvalidate/key`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key. **[Permissions](#permissions) required:** None.
   *
   * @tags Project key and name validation
   * @name GetValidProjectKey
   * @summary Get valid project key
   * @request GET:/rest/api/2/projectvalidate/validProjectKey
   * @secure
   */
  getValidProjectKey = (query?: { key?: string }, params: RequestParams = {}) =>
    this.request<string, void>({
      path: `/rest/api/2/projectvalidate/validProjectKey`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Checks that a project name isn't in use. If the name isn't in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned. **[Permissions](#permissions) required:** None.
   *
   * @tags Project key and name validation
   * @name GetValidProjectName
   * @summary Get valid project name
   * @request GET:/rest/api/2/projectvalidate/validProjectName
   * @secure
   */
  getValidProjectName = (query: { name: string }, params: RequestParams = {}) =>
    this.request<string, void>({
      path: `/rest/api/2/projectvalidate/validProjectName`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of all issue resolution values. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Issue resolutions
   * @name GetResolutions
   * @summary Get resolutions
   * @request GET:/rest/api/2/resolution
   * @secure
   */
  getResolutions = (params: RequestParams = {}) =>
    this.request<Resolution[], void>({
      path: `/rest/api/2/resolution`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns an issue resolution value. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Issue resolutions
   * @name GetResolution
   * @summary Get resolution
   * @request GET:/rest/api/2/resolution/{id}
   * @secure
   */
  getResolution = (id: string, params: RequestParams = {}) =>
    this.request<Resolution, void>({
      path: `/rest/api/2/resolution/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Gets a list of all project roles, complete with project role details and default actors. ### About project roles ### [Project roles](https://confluence.atlassian.com/x/3odKLg) are a flexible way to to associate users and groups with projects. In Jira Cloud, the list of project roles is shared globally with all projects, but each project can have a different set of actors associated with it (unlike groups, which have the same membership throughout all Jira applications). Project roles are used in [permission schemes](#api-rest-api-2-permissionscheme-get), [email notification schemes](#api-rest-api-2-notificationscheme-get), [issue security levels](#api-rest-api-2-issuesecurityschemes-get), [comment visibility](#api-rest-api-2-comment-list-post), and workflow conditions. #### Members and actors #### In the Jira REST API, a member of a project role is called an *actor*. An *actor* is a group or user associated with a project role. Actors may be set as [default members](https://confluence.atlassian.com/x/3odKLg#Managingprojectroles-Specifying'defaultmembers'foraprojectrole) of the project role or set at the project level: *  Default actors: Users and groups that are assigned to the project role for all newly created projects. The default actors can be removed at the project level later if desired. *  Actors: Users and groups that are associated with a project role for a project, which may differ from the default actors. This enables you to assign a user to different roles in different projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project roles
   * @name GetAllProjectRoles
   * @summary Get all project roles
   * @request GET:/rest/api/2/role
   * @secure
   */
  getAllProjectRoles = (params: RequestParams = {}) =>
    this.request<ProjectRole[], void>({
      path: `/rest/api/2/role`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a new project role with no [default actors](#api-rest-api-2-resolution-get). You can use the [Add default actors to project role](#api-rest-api-2-role-id-actors-post) operation to add default actors to the project role after creating it. *Note that although a new project role is available to all projects upon creation, any default actors that are associated with the project role are not added to projects that existed prior to the role being created.*< **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project roles
   * @name CreateProjectRole
   * @summary Create project role
   * @request POST:/rest/api/2/role
   * @secure
   */
  createProjectRole = (data: CreateUpdateRoleRequestBean, params: RequestParams = {}) =>
    this.request<ProjectRole, void>({
      path: `/rest/api/2/role`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project roles
   * @name GetProjectRoleById
   * @summary Get project role by ID
   * @request GET:/rest/api/2/role/{id}
   * @secure
   */
  getProjectRoleById = (id: number, params: RequestParams = {}) =>
    this.request<ProjectRole, void>({
      path: `/rest/api/2/role/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates the project role's name and description. You must include both a name and a description in the request. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project roles
   * @name FullyUpdateProjectRole
   * @summary Fully update project role
   * @request PUT:/rest/api/2/role/{id}
   * @secure
   */
  fullyUpdateProjectRole = (id: number, data: CreateUpdateRoleRequestBean, params: RequestParams = {}) =>
    this.request<ProjectRole, void>({
      path: `/rest/api/2/role/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates either the project role's name or its description. You cannot update both the name and description at the same time using this operation. If you send a request with a name and a description only the name is updated. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project roles
   * @name PartialUpdateProjectRole
   * @summary Partial update project role
   * @request POST:/rest/api/2/role/{id}
   * @secure
   */
  partialUpdateProjectRole = (id: number, data: CreateUpdateRoleRequestBean, params: RequestParams = {}) =>
    this.request<ProjectRole, void>({
      path: `/rest/api/2/role/${id}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project roles
   * @name DeleteProjectRole
   * @summary Delete project role
   * @request DELETE:/rest/api/2/role/{id}
   * @secure
   */
  deleteProjectRole = (id: number, query?: { swap?: number }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/role/${id}`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns the [default actors](#api-rest-api-2-resolution-get) for the project role. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project role actors
   * @name GetProjectRoleActorsForRole
   * @summary Get default actors for project role
   * @request GET:/rest/api/2/role/{id}/actors
   * @secure
   */
  getProjectRoleActorsForRole = (id: number, params: RequestParams = {}) =>
    this.request<ProjectRole, void>({
      path: `/rest/api/2/role/${id}/actors`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds [default actors](#api-rest-api-2-resolution-get) to a role. You may add groups or users, but you cannot add groups and users in the same request. Changing a project role's default actors does not affect project role members for projects already created. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project role actors
   * @name AddProjectRoleActorsToRole
   * @summary Add default actors to project role
   * @request POST:/rest/api/2/role/{id}/actors
   * @secure
   */
  addProjectRoleActorsToRole = (id: number, data: ActorInputBean, params: RequestParams = {}) =>
    this.request<ProjectRole, void>({
      path: `/rest/api/2/role/${id}/actors`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes the [default actors](#api-rest-api-2-resolution-get) from a project role. You may delete a group or user, but you cannot delete a group and a user in the same request. Changing a project role's default actors does not affect project role members for projects already created. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Project role actors
   * @name DeleteProjectRoleActorsFromRole
   * @summary Delete default actors from project role
   * @request DELETE:/rest/api/2/role/{id}/actors
   * @secure
   */
  deleteProjectRoleActorsFromRole = (
    id: number,
    query?: { user?: string; group?: string },
    params: RequestParams = {},
  ) =>
    this.request<ProjectRole, void>({
      path: `/rest/api/2/role/${id}/actors`,
      method: 'DELETE',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of all screens or those specified by one or more screen IDs. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screens
   * @name GetScreens
   * @summary Get screens
   * @request GET:/rest/api/2/screens
   * @secure
   */
  getScreens = (query?: { startAt?: number; maxResults?: number; id?: number[] }, params: RequestParams = {}) =>
    this.request<PageBeanScreen, void>({
      path: `/rest/api/2/screens`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a screen with a default field tab. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screens
   * @name CreateScreen
   * @summary Create screen
   * @request POST:/rest/api/2/screens
   * @secure
   */
  createScreen = (data: ScreenDetails, params: RequestParams = {}) =>
    this.request<Screen, void>({
      path: `/rest/api/2/screens`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds a field to the default tab of the default screen. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screens
   * @name AddFieldToDefaultScreen
   * @summary Add field to default screen
   * @request POST:/rest/api/2/screens/addToDefault/{fieldId}
   * @secure
   */
  addFieldToDefaultScreen = (fieldId: string, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/screens/addToDefault/${fieldId}`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a screen. Only screens used in classic projects can be updated. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screens
   * @name UpdateScreen
   * @summary Update screen
   * @request PUT:/rest/api/2/screens/{screenId}
   * @secure
   */
  updateScreen = (screenId: number, data: UpdateScreenDetails, params: RequestParams = {}) =>
    this.request<Screen, void>({
      path: `/rest/api/2/screens/${screenId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a screen. A screen cannot be deleted if it is used in a screen scheme, workflow, or workflow draft. Only screens used in classic projects can be deleted.
   *
   * @tags Screens
   * @name DeleteScreen
   * @summary Delete screen
   * @request DELETE:/rest/api/2/screens/{screenId}
   * @secure
   */
  deleteScreen = (screenId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/screens/${screenId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns the fields that can be added to a tab on a screen. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screens
   * @name GetAvailableScreenFields
   * @summary Get available screen fields
   * @request GET:/rest/api/2/screens/{screenId}/availableFields
   * @secure
   */
  getAvailableScreenFields = (screenId: number, params: RequestParams = {}) =>
    this.request<ScreenableField[], void>({
      path: `/rest/api/2/screens/${screenId}/availableFields`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the list of tabs for a screen. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.
   *
   * @tags Screen tabs
   * @name GetAllScreenTabs
   * @summary Get all screen tabs
   * @request GET:/rest/api/2/screens/{screenId}/tabs
   * @secure
   */
  getAllScreenTabs = (screenId: number, query?: { projectKey?: string }, params: RequestParams = {}) =>
    this.request<ScreenableTab[], void>({
      path: `/rest/api/2/screens/${screenId}/tabs`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a tab for a screen. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screen tabs
   * @name AddScreenTab
   * @summary Create screen tab
   * @request POST:/rest/api/2/screens/{screenId}/tabs
   * @secure
   */
  addScreenTab = (screenId: number, data: ScreenableTab, params: RequestParams = {}) =>
    this.request<ScreenableTab, void>({
      path: `/rest/api/2/screens/${screenId}/tabs`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates the name of a screen tab. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screen tabs
   * @name RenameScreenTab
   * @summary Update screen tab
   * @request PUT:/rest/api/2/screens/{screenId}/tabs/{tabId}
   * @secure
   */
  renameScreenTab = (screenId: number, tabId: number, data: ScreenableTab, params: RequestParams = {}) =>
    this.request<ScreenableTab, void>({
      path: `/rest/api/2/screens/${screenId}/tabs/${tabId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a screen tab. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screen tabs
   * @name DeleteScreenTab
   * @summary Delete screen tab
   * @request DELETE:/rest/api/2/screens/{screenId}/tabs/{tabId}
   * @secure
   */
  deleteScreenTab = (screenId: number, tabId: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/screens/${screenId}/tabs/${tabId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns all fields for a screen tab. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.
   *
   * @tags Screen tab fields
   * @name GetAllScreenTabFields
   * @summary Get all screen tab fields
   * @request GET:/rest/api/2/screens/{screenId}/tabs/{tabId}/fields
   * @secure
   */
  getAllScreenTabFields = (
    screenId: number,
    tabId: number,
    query?: { projectKey?: string },
    params: RequestParams = {},
  ) =>
    this.request<ScreenableField[], void>({
      path: `/rest/api/2/screens/${screenId}/tabs/${tabId}/fields`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds a field to a screen tab. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screen tab fields
   * @name AddScreenTabField
   * @summary Add screen tab field
   * @request POST:/rest/api/2/screens/{screenId}/tabs/{tabId}/fields
   * @secure
   */
  addScreenTabField = (screenId: number, tabId: number, data: AddFieldBean, params: RequestParams = {}) =>
    this.request<ScreenableField, void>({
      path: `/rest/api/2/screens/${screenId}/tabs/${tabId}/fields`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Removes a field from a screen tab. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screen tab fields
   * @name RemoveScreenTabField
   * @summary Remove screen tab field
   * @request DELETE:/rest/api/2/screens/{screenId}/tabs/{tabId}/fields/{id}
   * @secure
   */
  removeScreenTabField = (screenId: number, tabId: number, id: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/screens/${screenId}/tabs/${tabId}/fields/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Moves a screen tab field. If `after` and `position` are provided in the request, `position` is ignored. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screen tab fields
   * @name MoveScreenTabField
   * @summary Move screen tab field
   * @request POST:/rest/api/2/screens/{screenId}/tabs/{tabId}/fields/{id}/move
   * @secure
   */
  moveScreenTabField = (screenId: number, tabId: number, id: string, data: MoveFieldBean, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/screens/${screenId}/tabs/${tabId}/fields/${id}/move`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Moves a screen tab. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screen tabs
   * @name MoveScreenTab
   * @summary Move screen tab
   * @request POST:/rest/api/2/screens/{screenId}/tabs/{tabId}/move/{pos}
   * @secure
   */
  moveScreenTab = (screenId: number, tabId: number, pos: number, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/screens/${screenId}/tabs/${tabId}/move/${pos}`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of screen schemes. Only screen schemes used in classic projects are returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screen schemes
   * @name GetScreenSchemes
   * @summary Get screen schemes
   * @request GET:/rest/api/2/screenscheme
   * @secure
   */
  getScreenSchemes = (query?: { startAt?: number; maxResults?: number; id?: number[] }, params: RequestParams = {}) =>
    this.request<PageBeanScreenScheme, void>({
      path: `/rest/api/2/screenscheme`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a screen scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screen schemes
   * @name CreateScreenScheme
   * @summary Create screen scheme
   * @request POST:/rest/api/2/screenscheme
   * @secure
   */
  createScreenScheme = (data: ScreenSchemeDetails, params: RequestParams = {}) =>
    this.request<ScreenSchemeId, void>({
      path: `/rest/api/2/screenscheme`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a screen scheme. Only screen schemes used in classic projects can be updated. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screen schemes
   * @name UpdateScreenScheme
   * @summary Update screen scheme
   * @request PUT:/rest/api/2/screenscheme/{screenSchemeId}
   * @secure
   */
  updateScreenScheme = (screenSchemeId: string, data: UpdateScreenSchemeDetails, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/screenscheme/${screenSchemeId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a screen scheme. A screen scheme cannot be deleted if it is used in an issue type screen scheme. Only screens schemes used in classic projects can be deleted. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Screen schemes
   * @name DeleteScreenScheme
   * @summary Delete screen scheme
   * @request DELETE:/rest/api/2/screenscheme/{screenSchemeId}
   * @secure
   */
  deleteScreenScheme = (screenSchemeId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/screenscheme/${screenSchemeId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Searches for issues using [JQL](https://confluence.atlassian.com/x/egORLQ). If the JQL query expression is too large to be encoded as a query parameter, use the [POST](#api-rest-api-2-search-post) version of this resource. This operation can be accessed anonymously. **[Permissions](#permissions) required:** Issues are included in the response where the user has: *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue search
   * @name SearchForIssuesUsingJql
   * @summary Search for issues using JQL (GET)
   * @request GET:/rest/api/2/search
   * @secure
   */
  searchForIssuesUsingJql = (
    query?: {
      jql?: string;
      startAt?: number;
      maxResults?: number;
      validateQuery?: 'strict' | 'warn' | 'none' | 'true' | 'false';
      fields?: string[];
      expand?: string;
      properties?: string[];
      fieldsByKeys?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<SearchResults, void>({
      path: `/rest/api/2/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Searches for issues using [JQL](https://confluence.atlassian.com/x/egORLQ). There is a [GET](#api-rest-api-2-search-get) version of this resource that can be used for smaller JQL query expressions. This operation can be accessed anonymously. **[Permissions](#permissions) required:** Issues are included in the response where the user has: *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue. *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * @tags Issue search
   * @name SearchForIssuesUsingJqlPost
   * @summary Search for issues using JQL (POST)
   * @request POST:/rest/api/2/search
   * @secure
   */
  searchForIssuesUsingJqlPost = (data: SearchRequestBean, params: RequestParams = {}) =>
    this.request<SearchResults, void>({
      path: `/rest/api/2/search`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns details of an issue security level. Use [Get issue security scheme](#api-rest-api-2-issuesecurityschemes-id-get) to obtain the IDs of issue security levels associated with the issue security scheme. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Issue security level
   * @name GetIssueSecurityLevel
   * @summary Get issue security level
   * @request GET:/rest/api/2/securitylevel/{id}
   * @secure
   */
  getIssueSecurityLevel = (id: string, params: RequestParams = {}) =>
    this.request<SecurityLevel, void>({
      path: `/rest/api/2/securitylevel/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns information about the Jira instance. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Server info
   * @name GetServerInfo
   * @summary Get Jira instance info
   * @request GET:/rest/api/2/serverInfo
   * @secure
   */
  getServerInfo = (params: RequestParams = {}) =>
    this.request<ServerInformation, void>({
      path: `/rest/api/2/serverInfo`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the default issue navigator columns. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue navigator settings
   * @name GetIssueNavigatorDefaultColumns
   * @summary Get issue navigator default columns
   * @request GET:/rest/api/2/settings/columns
   * @secure
   */
  getIssueNavigatorDefaultColumns = (params: RequestParams = {}) =>
    this.request<ColumnItem[], void>({
      path: `/rest/api/2/settings/columns`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the default issue navigator columns. The `columns` parameter accepts a navigable field value and is expressed as HTML form data. To specify multiple columns, pass multiple `columns` parameters. For example, in curl: `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/2/settings/columns` If no column details are sent, then all default columns are removed. A navigable field is one that can be used as a column on the issue navigator. Find details of navigable issue columns using [Get fields](#api-rest-api-2-field-get). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Issue navigator settings
   * @name SetIssueNavigatorDefaultColumns
   * @summary Set issue navigator default columns
   * @request PUT:/rest/api/2/settings/columns
   * @secure
   */
  setIssueNavigatorDefaultColumns = (data: string[], params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/settings/columns`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of all statuses associated with workflows. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Workflow statuses
   * @name GetStatuses
   * @summary Get all statuses
   * @request GET:/rest/api/2/status
   * @secure
   */
  getStatuses = (params: RequestParams = {}) =>
    this.request<StatusDetails[], void>({
      path: `/rest/api/2/status`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a status. The status must be associated with a workflow to be returned. If a name is used on more than one status, only the status found first is returned. Therefore, identifying the status by its ID may be preferable. This operation can be accessed anonymously. [Permissions](#permissions) required: None.
   *
   * @tags Workflow statuses
   * @name GetStatus
   * @summary Get status
   * @request GET:/rest/api/2/status/{idOrName}
   * @secure
   */
  getStatus = (idOrName: string, params: RequestParams = {}) =>
    this.request<StatusDetails, void>({
      path: `/rest/api/2/status/${idOrName}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of all status categories. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Workflow status categories
   * @name GetStatusCategories
   * @summary Get all status categories
   * @request GET:/rest/api/2/statuscategory
   * @secure
   */
  getStatusCategories = (params: RequestParams = {}) =>
    this.request<StatusCategory[], void>({
      path: `/rest/api/2/statuscategory`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a status category. Status categories provided a mechanism for categorizing [statuses](#api-rest-api-2-status-idOrName-get). **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Workflow status categories
   * @name GetStatusCategory
   * @summary Get status category
   * @request GET:/rest/api/2/statuscategory/{idOrKey}
   * @secure
   */
  getStatusCategory = (idOrKey: string, params: RequestParams = {}) =>
    this.request<StatusCategory, void>({
      path: `/rest/api/2/statuscategory/${idOrKey}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the status of a [long-running asynchronous task](#async). When a task has finished, this operation returns the JSON blob applicable to the task. See the documentation of the operation that created the task for details. Task details are not permanently retained. As of September 2019, details are retained for 14 days although this period may change without notice. **[Permissions](#permissions) required:** either of: *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). *  Creator of the task.
   *
   * @tags Tasks
   * @name GetTask
   * @summary Get task
   * @request GET:/rest/api/2/task/{taskId}
   * @secure
   */
  getTask = (taskId: string, params: RequestParams = {}) =>
    this.request<TaskProgressBeanObject, void>({
      path: `/rest/api/2/task/${taskId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Cancels a task. **[Permissions](#permissions) required:** either of: *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). *  Creator of the task.
   *
   * @tags Tasks
   * @name CancelTask
   * @summary Cancel task
   * @request POST:/rest/api/2/task/{taskId}/cancel
   * @secure
   */
  cancelTask = (taskId: string, params: RequestParams = {}) =>
    this.request<any, string[]>({
      path: `/rest/api/2/task/${taskId}/cancel`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the system and custom avatars for a project or issue type. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  for custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to. *  for custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in. *  for system avatars, none.
   *
   * @tags Avatars
   * @name GetAvatars
   * @summary Get avatars
   * @request GET:/rest/api/2/universal_avatar/type/{type}/owner/{entityId}
   * @secure
   */
  getAvatars = (type: 'project' | 'issuetype', entityId: string, params: RequestParams = {}) =>
    this.request<Avatars, void>({
      path: `/rest/api/2/universal_avatar/type/${type}/owner/${entityId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Loads a custom avatar for a project or issue type. Specify the avatar's local file location in the body of the request. Also, include the following headers: *  `X-Atlassian-Token: no-check` To prevent XSRF protection blocking the request, for more information see [Special Headers](#special-request-headers). *  `Content-Type: image/image type` Valid image types are JPEG, GIF, or PNG. For example: `curl --request POST ` `--user email@example.com:<api_token> ` `--header 'X-Atlassian-Token: no-check' ` `--header 'Content-Type: image/< image_type>' ` `--data-binary "<@/path/to/file/with/your/avatar>" ` `--url 'https://your-domain.atlassian.net/rest/api/2/universal_avatar/type/{type}/owner/{entityId}'` The avatar is cropped to a square. If no crop parameters are specified, the square originates at the top left of the image. The length of the square's sides is set to the smaller of the height or width of the image. The cropped image is then used to create avatars of 16x16, 24x24, 32x32, and 48x48 in size. After creating the avatar use: *  [Update issue type](#api-rest-api-2-issuetype-id-put) to set it as the issue type's displayed avatar. *  [Set project avatar](#api-rest-api-2-project-projectIdOrKey-avatar-put) to set it as the project's displayed avatar. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Avatars
   * @name StoreAvatar
   * @summary Load avatar
   * @request POST:/rest/api/2/universal_avatar/type/{type}/owner/{entityId}
   * @secure
   */
  storeAvatar = (
    type: 'project' | 'issuetype',
    entityId: string,
    query: { x?: number; y?: number; size: number },
    data: any,
    params: RequestParams = {},
  ) =>
    this.request<Avatar, void>({
      path: `/rest/api/2/universal_avatar/type/${type}/owner/${entityId}`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an avatar from a project or issue type. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Avatars
   * @name DeleteAvatar
   * @summary Delete avatar
   * @request DELETE:/rest/api/2/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}
   * @secure
   */
  deleteAvatar = (type: 'project' | 'issuetype', owningObjectId: string, id: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/universal_avatar/type/${type}/owner/${owningObjectId}/avatar/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns the default project or issue type avatar image. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags Avatars
   * @name GetAvatarImageByType
   * @summary Get avatar image by type
   * @request GET:/rest/api/2/universal_avatar/view/type/{type}
   * @secure
   */
  getAvatarImageByType = (
    type: 'issuetype' | 'project',
    query?: { size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'; format?: 'png' | 'svg' },
    params: RequestParams = {},
  ) =>
    this.request<ListWrapperCallbackApplicationRole, ErrorCollection>({
      path: `/rest/api/2/universal_avatar/view/type/${type}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a project or issue type avatar image by ID. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  For system avatars, none. *  For custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to. *  For custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.
   *
   * @tags Avatars
   * @name GetAvatarImageById
   * @summary Get avatar image by ID
   * @request GET:/rest/api/2/universal_avatar/view/type/{type}/avatar/{id}
   * @secure
   */
  getAvatarImageById = (
    type: 'issuetype' | 'project',
    id: number,
    query?: { size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'; format?: 'png' | 'svg' },
    params: RequestParams = {},
  ) =>
    this.request<ListWrapperCallbackApplicationRole, ErrorCollection>({
      path: `/rest/api/2/universal_avatar/view/type/${type}/avatar/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the avatar image for a project or issue type. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  For system avatars, none. *  For custom project avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the avatar belongs to. *  For custom issue type avatars, *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the issue type is used in.
   *
   * @tags Avatars
   * @name GetAvatarImageByOwner
   * @summary Get avatar image by owner
   * @request GET:/rest/api/2/universal_avatar/view/type/{type}/owner/{entityId}
   * @secure
   */
  getAvatarImageByOwner = (
    type: 'issuetype' | 'project',
    entityId: string,
    query?: { size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'; format?: 'png' | 'svg' },
    params: RequestParams = {},
  ) =>
    this.request<ListWrapperCallbackApplicationRole, ErrorCollection>({
      path: `/rest/api/2/universal_avatar/view/type/${type}/owner/${entityId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a user. **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Users
   * @name GetUser
   * @summary Get user
   * @request GET:/rest/api/2/user
   * @secure
   */
  getUser = (
    query?: { accountId?: string; username?: string; key?: string; expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<User, void>({
      path: `/rest/api/2/user`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated. If the user exists and has access to Jira, the operation returns a 201 status. If the user exists but does not have access to Jira, the operation returns a 400 status. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Users
   * @name CreateUser
   * @summary Create user
   * @request POST:/rest/api/2/user
   * @secure
   */
  createUser = (data: NewUserDetails, params: RequestParams = {}) =>
    this.request<User, void>({
      path: `/rest/api/2/user`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a user. **[Permissions](#permissions) required:** Site administration (that is, membership of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
   *
   * @tags Users
   * @name RemoveUser
   * @summary Delete user
   * @request DELETE:/rest/api/2/user
   * @secure
   */
  removeUser = (query: { accountId: string; username?: string; key?: string }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/user`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a list of users who can be assigned issues in one or more projects. The list may be restricted to users whose attributes match a string. This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that can be assigned issues in the projects. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who can be assigned issues in the projects, use [Get all users](#api-rest-api-2-users-search-get) and filter the records in your code. This operation can be accessed anonymously. **[Permissions](#permissions) required:** None.
   *
   * @tags User search
   * @name FindBulkAssignableUsers
   * @summary Find users assignable to projects
   * @request GET:/rest/api/2/user/assignable/multiProjectSearch
   * @secure
   */
  findBulkAssignableUsers = (
    query: {
      query?: string;
      username?: string;
      accountId?: string;
      projectKeys: string;
      startAt?: number;
      maxResults?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<User[], void>({
      path: `/rest/api/2/user/assignable/multiProjectSearch`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of users that can be assigned to an issue. Use this operation to find the list of users who can be assigned to: *  a new issue, by providing the `projectKeyOrId`. *  an updated issue, by providing the `issueKey`. *  to an issue during a transition (workflow action), by providing the `issueKey` and the transition id in `actionDescriptorId`. You can obtain the IDs of an issue's valid transitions using the `transitions` option in the `expand` parameter of [ Get issue](#api-rest-api-2-issue-issueIdOrKey-get). In all these cases, you can pass an account ID to determine if a user can be assigned to an issue. The user is returned in the response if they can be assigned to the issue or issue transition. This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that can be assigned the issue. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who can be assigned the issue, use [Get all users](#api-rest-api-2-users-search-get) and filter the records in your code. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags User search
   * @name FindAssignableUsers
   * @summary Find users assignable to issues
   * @request GET:/rest/api/2/user/assignable/search
   * @secure
   */
  findAssignableUsers = (
    query?: {
      query?: string;
      sessionId?: string;
      username?: string;
      accountId?: string;
      project?: string;
      issueKey?: string;
      startAt?: number;
      maxResults?: number;
      actionDescriptorId?: number;
      recommend?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<User[], void>({
      path: `/rest/api/2/user/assignable/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of the users specified by one or more account IDs. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Users
   * @name BulkGetUsers
   * @summary Bulk get users
   * @request GET:/rest/api/2/user/bulk
   * @secure
   */
  bulkGetUsers = (
    query: { startAt?: number; maxResults?: number; username?: string[]; key?: string[]; accountId: string[] },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanUser, void>({
      path: `/rest/api/2/user/bulk`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the account IDs for the users specified in the `key` or `username` parameters. Note that multiple `key` or `username` parameters can be specified. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Users
   * @name BulkGetUsersMigration
   * @summary Get account IDs for users
   * @request GET:/rest/api/2/user/bulk/migration
   * @secure
   */
  bulkGetUsersMigration = (
    query?: { startAt?: number; maxResults?: number; username?: string[]; key?: string[] },
    params: RequestParams = {},
  ) =>
    this.request<UserMigrationBean[], void>({
      path: `/rest/api/2/user/bulk/migration`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the default [issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If `accountId` is not passed in the request, the calling user's details are returned. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLgl), to get the column details for any user. *  Permission to access Jira, to get the calling user's column details.
   *
   * @tags Users
   * @name GetUserDefaultColumns
   * @summary Get user default columns
   * @request GET:/rest/api/2/user/columns
   * @secure
   */
  getUserDefaultColumns = (query?: { accountId?: string; username?: string }, params: RequestParams = {}) =>
    this.request<ColumnItem[], void>({
      path: `/rest/api/2/user/columns`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If an account ID is not passed, the calling user's default columns are set. If no column details are sent, then all default columns are removed. The parameters for this resource are expressed as HTML form data. For example, in curl: `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/2/user/columns?accountId=5b10ac8d82e05b22cc7d4ef5'` **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user. *  Permission to access Jira, to set the calling user's columns.
   *
   * @tags Users
   * @name SetUserColumns
   * @summary Set user default columns
   * @request PUT:/rest/api/2/user/columns
   * @secure
   */
  setUserColumns = (data: string[], query?: { accountId?: string }, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/user/columns`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
  /**
   * @description Resets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user to the system default. If `accountId` is not passed, the calling user's default columns are reset. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user. *  Permission to access Jira, to set the calling user's columns.
   *
   * @tags Users
   * @name ResetUserColumns
   * @summary Reset user default columns
   * @request DELETE:/rest/api/2/user/columns
   * @secure
   */
  resetUserColumns = (query?: { accountId?: string; username?: string }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/user/columns`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a user's email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).
   *
   * @tags Users
   * @name GetUserEmail
   * @summary Get user email
   * @request GET:/rest/api/2/user/email
   * @secure
   */
  getUserEmail = (query: { accountId: string }, params: RequestParams = {}) =>
    this.request<UnrestrictedUserEmail, void>({
      path: `/rest/api/2/user/email`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a user's email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).
   *
   * @tags Users
   * @name GetUserEmailBulk
   * @summary Get user email bulk
   * @request GET:/rest/api/2/user/email/bulk
   * @secure
   */
  getUserEmailBulk = (query: { accountId: string[] }, params: RequestParams = {}) =>
    this.request<UnrestrictedUserEmail, void>({
      path: `/rest/api/2/user/email/bulk`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the groups to which a user belongs. **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Users
   * @name GetUserGroups
   * @summary Get user groups
   * @request GET:/rest/api/2/user/groups
   * @secure
   */
  getUserGroups = (query: { accountId: string; username?: string; key?: string }, params: RequestParams = {}) =>
    this.request<GroupName[], void>({
      path: `/rest/api/2/user/groups`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of users who fulfill these criteria: *  their user attributes match a search string. *  they have a set of permissions for a project or issue. If no search string is provided, a list of all users with the permissions is returned. This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that match the search string and have permission for the project or issue. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the search string and have permission for the project or issue, use [Get all users](#api-rest-api-2-users-search-get) and filter the records in your code. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to get users for any project. *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project, to get users for that project.
   *
   * @tags User search
   * @name FindUsersWithAllPermissions
   * @summary Find users with permissions
   * @request GET:/rest/api/2/user/permission/search
   * @secure
   */
  findUsersWithAllPermissions = (
    query: {
      query?: string;
      username?: string;
      accountId?: string;
      permissions: string;
      issueKey?: string;
      projectKey?: string;
      startAt?: number;
      maxResults?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<User[], void>({
      path: `/rest/api/2/user/permission/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of users whose attributes match the query term. The returned object includes the `html` field where the matched query term is highlighted with the HTML strong tag. A list of account IDs can be provided to exclude users from the results. This operation takes the users in the range defined by `maxResults`, up to the thousandth user, and then returns only the users from that range that match the query term. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the query term, use [Get all users](#api-rest-api-2-users-search-get) and filter the records in your code. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). Anonymous calls and calls by users without the required permission return search results for an exact name match only.
   *
   * @tags User search
   * @name FindUsersForPicker
   * @summary Find users for picker
   * @request GET:/rest/api/2/user/picker
   * @secure
   */
  findUsersForPicker = (
    query: {
      query: string;
      maxResults?: number;
      showAvatar?: boolean;
      exclude?: string[];
      excludeAccountIds?: string[];
      avatarSize?: string;
      excludeConnectUsers?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FoundUsers, void>({
      path: `/rest/api/2/user/picker`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the keys of all properties for a user. Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to access the property keys on any user. *  Access to Jira, to access the calling user's property keys.
   *
   * @tags User properties
   * @name GetUserPropertyKeys
   * @summary Get user property keys
   * @request GET:/rest/api/2/user/properties
   * @secure
   */
  getUserPropertyKeys = (
    query?: { accountId?: string; userKey?: string; username?: string },
    params: RequestParams = {},
  ) =>
    this.request<PropertyKeys, void>({
      path: `/rest/api/2/user/properties`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the value of a user's property. If no property key is provided [Get user property keys](#api-rest-api-2-user-properties-get) is called. Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to get a property from any user. *  Access to Jira, to get a property from the calling user's record.
   *
   * @tags User properties
   * @name GetUserProperty
   * @summary Get user property
   * @request GET:/rest/api/2/user/properties/{propertyKey}
   * @secure
   */
  getUserProperty = (
    propertyKey: string,
    query?: { accountId?: string; userKey?: string; username?: string },
    params: RequestParams = {},
  ) =>
    this.request<EntityProperty, void>({
      path: `/rest/api/2/user/properties/${propertyKey}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the value of a user's property. Use this resource to store custom data against a user. Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set a property on any user. *  Access to Jira, to set a property on the calling user's record.
   *
   * @tags User properties
   * @name SetUserProperty
   * @summary Set user property
   * @request PUT:/rest/api/2/user/properties/{propertyKey}
   * @secure
   */
  setUserProperty = (
    propertyKey: string,
    data: any,
    query?: { accountId?: string; userKey?: string; username?: string },
    params: RequestParams = {},
  ) =>
    this.request<any, void>({
      path: `/rest/api/2/user/properties/${propertyKey}`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a property from a user. Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira. **[Permissions](#permissions) required:** *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to delete a property from any user. *  Access to Jira, to delete a property from the calling user's record.
   *
   * @tags User properties
   * @name DeleteUserProperty
   * @summary Delete user property
   * @request DELETE:/rest/api/2/user/properties/{propertyKey}
   * @secure
   */
  deleteUserProperty = (
    propertyKey: string,
    query?: { accountId?: string; userKey?: string; username?: string },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/rest/api/2/user/properties/${propertyKey}`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a list of users that match the search string and property. This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that match the search string and property. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the search string and property, use [Get all users](#api-rest-api-2-users-search-get) and filter the records in your code. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). Anonymous calls or calls by users without the required permission return empty search results.
   *
   * @tags User search
   * @name FindUsers
   * @summary Find users
   * @request GET:/rest/api/2/user/search
   * @secure
   */
  findUsers = (
    query?: {
      query?: string;
      username?: string;
      accountId?: string;
      startAt?: number;
      maxResults?: number;
      property?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<User[], void>({
      path: `/rest/api/2/user/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Finds users with a structured query and returns a [paginated](#pagination) list of user details. This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that match the structured query. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the structured query, use [Get all users](#api-rest-api-2-users-search-get) and filter the records in your code. **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). The query statements are: *  `is assignee of PROJ` Returns the users that are assignees of at least one issue in project *PROJ*. *  `is assignee of (PROJ-1, PROJ-2)` Returns users that are assignees on the issues *PROJ-1* or *PROJ-2*. *  `is reporter of (PROJ-1, PROJ-2)` Returns users that are reporters on the issues *PROJ-1* or *PROJ-2*. *  `is watcher of (PROJ-1, PROJ-2)` Returns users that are watchers on the issues *PROJ-1* or *PROJ-2*. *  `is voter of (PROJ-1, PROJ-2)` Returns users that are voters on the issues *PROJ-1* or *PROJ-2*. *  `is commenter of (PROJ-1, PROJ-2)` Returns users that have posted a comment on the issues *PROJ-1* or *PROJ-2*. *  `is transitioner of (PROJ-1, PROJ-2)` Returns users that have performed a transition on issues *PROJ-1* or *PROJ-2*. *  `[propertyKey].entity.property.path is "property value"` Returns users with the entity property value. The list of issues can be extended as needed, as in *(PROJ-1, PROJ-2, ... PROJ-n)*. Statements can be combined using the `AND` and `OR` operators to form more complex queries. For example: `is assignee of PROJ AND [propertyKey].entity.property.path is "property value"`
   *
   * @tags User search
   * @name FindUsersByQuery
   * @summary Find users by query
   * @request GET:/rest/api/2/user/search/query
   * @secure
   */
  findUsersByQuery = (query: { query: string; startAt?: number; maxResults?: number }, params: RequestParams = {}) =>
    this.request<PageBeanUser, void>({
      path: `/rest/api/2/user/search/query`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Finds users with a structured query and returns a [paginated](#pagination) list of user keys. This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that match the structured query. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the structured query, use [Get all users](#api-rest-api-2-users-search-get) and filter the records in your code. **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). The query statements are: *  `is assignee of PROJ` Returns the users that are assignees of at least one issue in project *PROJ*. *  `is assignee of (PROJ-1, PROJ-2)` Returns users that are assignees on the issues *PROJ-1* or *PROJ-2*. *  `is reporter of (PROJ-1, PROJ-2)` Returns users that are reporters on the issues *PROJ-1* or *PROJ-2*. *  `is watcher of (PROJ-1, PROJ-2)` Returns users that are watchers on the issues *PROJ-1* or *PROJ-2*. *  `is voter of (PROJ-1, PROJ-2)` Returns users that are voters on the issues *PROJ-1* or *PROJ-2*. *  `is commenter of (PROJ-1, PROJ-2)` Returns users that have posted a comment on the issues *PROJ-1* or *PROJ-2*. *  `is transitioner of (PROJ-1, PROJ-2)` Returns users that have performed a transition on issues *PROJ-1* or *PROJ-2*. *  `[propertyKey].entity.property.path is "property value"` Returns users with the entity property value. The list of issues can be extended as needed, as in *(PROJ-1, PROJ-2, ... PROJ-n)*. Statements can be combined using the `AND` and `OR` operators to form more complex queries. For example: `is assignee of PROJ AND [propertyKey].entity.property.path is "property value"`
   *
   * @tags User search
   * @name FindUserKeysByQuery
   * @summary Find user keys by query
   * @request GET:/rest/api/2/user/search/query/key
   * @secure
   */
  findUserKeysByQuery = (query: { query: string; startAt?: number; maxResults?: number }, params: RequestParams = {}) =>
    this.request<PageBeanUserKey, void>({
      path: `/rest/api/2/user/search/query/key`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of users who fulfill these criteria: *  their user attributes match a search string. *  they have permission to browse issues. Use this resource to find users who can browse: *  an issue, by providing the `issueKey`. *  any issue in a project, by providing the `projectKey`. This operation takes the users in the range defined by `startAt` and `maxResults`, up to the thousandth user, and then returns only the users from that range that match the search string and have permission to browse issues. This means the operation usually returns fewer users than specified in `maxResults`. To get all the users who match the search string and have permission to browse issues, use [Get all users](#api-rest-api-2-users-search-get) and filter the records in your code. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). Anonymous calls and calls by users without the required permission return empty search results.
   *
   * @tags User search
   * @name FindUsersWithBrowsePermission
   * @summary Find users with browse permission
   * @request GET:/rest/api/2/user/viewissue/search
   * @secure
   */
  findUsersWithBrowsePermission = (
    query?: {
      query?: string;
      username?: string;
      accountId?: string;
      issueKey?: string;
      projectKey?: string;
      startAt?: number;
      maxResults?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<User[], void>({
      path: `/rest/api/2/user/viewissue/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of all (active and inactive) users. **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Users
   * @name GetAllUsersDefault
   * @summary Get all users default
   * @request GET:/rest/api/2/users
   * @secure
   */
  getAllUsersDefault = (query?: { startAt?: number; maxResults?: number }, params: RequestParams = {}) =>
    this.request<User[], void>({
      path: `/rest/api/2/users`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of all (active and inactive) users. **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Users
   * @name GetAllUsers
   * @summary Get all users
   * @request GET:/rest/api/2/users/search
   * @secure
   */
  getAllUsers = (query?: { startAt?: number; maxResults?: number }, params: RequestParams = {}) =>
    this.request<User[], void>({
      path: `/rest/api/2/users/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a project version. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the version is added to.
   *
   * @tags Project versions
   * @name CreateVersion
   * @summary Create version
   * @request POST:/rest/api/2/version
   * @secure
   */
  createVersion = (data: Version, params: RequestParams = {}) =>
    this.request<Version, void>({
      path: `/rest/api/2/version`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a project version. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the version.
   *
   * @tags Project versions
   * @name GetVersion
   * @summary Get version
   * @request GET:/rest/api/2/version/{id}
   * @secure
   */
  getVersion = (id: string, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Version, void>({
      path: `/rest/api/2/version/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a project version. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
   *
   * @tags Project versions
   * @name UpdateVersion
   * @summary Update version
   * @request PUT:/rest/api/2/version/{id}
   * @secure
   */
  updateVersion = (id: string, data: Version, params: RequestParams = {}) =>
    this.request<Version, void>({
      path: `/rest/api/2/version/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a project version. Deprecated, use [ Delete and replace version](#api-rest-api-2-version-id-removeAndSwap-post) that supports swapping version values in custom fields, in addition to the swapping for `fixVersion` and `affectedVersion` provided in this resource. Alternative versions can be provided to update issues that use the deleted version in `fixVersion` or `affectedVersion`. If alternatives are not provided, occurrences of `fixVersion` and `affectedVersion` that contain the deleted version are cleared. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
   *
   * @tags Project versions
   * @name DeleteVersion
   * @summary Delete version
   * @request DELETE:/rest/api/2/version/{id}
   * @deprecated
   * @secure
   */
  deleteVersion = (
    id: string,
    query?: { moveFixIssuesTo?: string; moveAffectedIssuesTo?: string },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/rest/api/2/version/${id}`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Merges two project versions. The merge is completed by deleting the version specified in `id` and replacing any occurrences of its ID in `fixVersion` with the version ID specified in `moveIssuesTo`. Consider using [ Delete and replace version](#api-rest-api-2-version-id-removeAndSwap-post) instead. This resource supports swapping version values in `fixVersion`, `affectedVersion`, and custom fields. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
   *
   * @tags Project versions
   * @name MergeVersions
   * @summary Merge versions
   * @request PUT:/rest/api/2/version/{id}/mergeto/{moveIssuesTo}
   * @secure
   */
  mergeVersions = (id: string, moveIssuesTo: string, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/version/${id}/mergeto/${moveIssuesTo}`,
      method: 'PUT',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Modifies the version's sequence within the project, which affects the display order of the versions in Jira. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.
   *
   * @tags Project versions
   * @name MoveVersion
   * @summary Move version
   * @request POST:/rest/api/2/version/{id}/move
   * @secure
   */
  moveVersion = (id: string, data: VersionMoveBean, params: RequestParams = {}) =>
    this.request<Version, void>({
      path: `/rest/api/2/version/${id}/move`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the following counts for a version: *  Number of issues where the `fixVersion` is set to the version. *  Number of issues where the `affectedVersion` is set to the version. *  Number of issues where a version custom field is set to the version. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.
   *
   * @tags Project versions
   * @name GetVersionRelatedIssues
   * @summary Get version's related issues count
   * @request GET:/rest/api/2/version/{id}/relatedIssueCounts
   * @secure
   */
  getVersionRelatedIssues = (id: string, params: RequestParams = {}) =>
    this.request<VersionIssueCounts, void>({
      path: `/rest/api/2/version/${id}/relatedIssueCounts`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a project version. Alternative versions can be provided to update issues that use the deleted version in `fixVersion`, `affectedVersion`, or any version picker custom fields. If alternatives are not provided, occurrences of `fixVersion`, `affectedVersion`, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
   *
   * @tags Project versions
   * @name DeleteAndReplaceVersion
   * @summary Delete and replace version
   * @request POST:/rest/api/2/version/{id}/removeAndSwap
   * @secure
   */
  deleteAndReplaceVersion = (id: string, data: DeleteAndReplaceVersionBean, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/version/${id}/removeAndSwap`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns counts of the issues and unresolved issues for the project version. This operation can be accessed anonymously. **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.
   *
   * @tags Project versions
   * @name GetVersionUnresolvedIssues
   * @summary Get version's unresolved issues count
   * @request GET:/rest/api/2/version/{id}/unresolvedIssueCount
   * @secure
   */
  getVersionUnresolvedIssues = (id: string, params: RequestParams = {}) =>
    this.request<VersionUnresolvedIssuesCount, void>({
      path: `/rest/api/2/version/${id}/unresolvedIssueCount`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of the webhooks registered by the calling app. **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.
   *
   * @tags Webhooks
   * @name GetDynamicWebhooksForApp
   * @summary Get dynamic webhooks for app
   * @request GET:/rest/api/2/webhook
   * @secure
   */
  getDynamicWebhooksForApp = (query?: { startAt?: number; maxResults?: number }, params: RequestParams = {}) =>
    this.request<PageBeanWebhook, ErrorCollection>({
      path: `/rest/api/2/webhook`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Registers webhooks. **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.
   *
   * @tags Webhooks
   * @name RegisterDynamicWebhooks
   * @summary Register dynamic webhooks
   * @request POST:/rest/api/2/webhook
   * @secure
   */
  registerDynamicWebhooks = (data: WebhookRegistrationDetails, params: RequestParams = {}) =>
    this.request<ContainerForRegisteredWebhooks, ErrorCollection>({
      path: `/rest/api/2/webhook`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Removes webhooks by ID. Only webhooks registered by the calling app are removed. If webhooks created by other apps are specified, they are ignored. **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.
   *
   * @tags Webhooks
   * @name DeleteWebhookById
   * @summary Delete webhooks by ID
   * @request DELETE:/rest/api/2/webhook
   * @secure
   */
  deleteWebhookById = (data: ContainerForWebhookIDs, params: RequestParams = {}) =>
    this.request<void, ErrorCollection>({
      path: `/rest/api/2/webhook`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns webhooks that have recently failed to be delivered to the requesting app after the maximum number of retries. After 72 hours the failure may no longer be returned by this operation. The oldest failure is returned first. This method uses a cursor-based pagination. To request the next page use the failure time of the last webhook on the list as the `failedAfter` value or use the URL provided in `next`. **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) can use this operation.
   *
   * @tags Webhooks
   * @name GetFailedWebhooks
   * @summary Get failed webhooks
   * @request GET:/rest/api/2/webhook/failed
   * @secure
   */
  getFailedWebhooks = (query?: { maxResults?: number; after?: number }, params: RequestParams = {}) =>
    this.request<FailedWebhooks, ErrorCollection>({
      path: `/rest/api/2/webhook/failed`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Webhooks registered through the REST API expire after 30 days. Call this resource periodically to keep them alive. Unrecognized webhook IDs (those that are not found or belong to other apps) are ignored. **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.
   *
   * @tags Webhooks
   * @name RefreshWebhooks
   * @summary Extend webhook life
   * @request PUT:/rest/api/2/webhook/refresh
   * @secure
   */
  refreshWebhooks = (data: ContainerForWebhookIDs, params: RequestParams = {}) =>
    this.request<WebhooksExpirationDate, ErrorCollection>({
      path: `/rest/api/2/webhook/refresh`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns all workflows in Jira or a workflow. Deprecated, use [Get workflows paginated](#api-rest-api-2-workflow-search-get). If the `workflowName` parameter is specified, the workflow is returned as an object (not in an array). Otherwise, an array of workflow objects is returned. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflows
   * @name GetAllWorkflows
   * @summary Get all workflows
   * @request GET:/rest/api/2/workflow
   * @deprecated
   * @secure
   */
  getAllWorkflows = (query?: { workflowName?: string }, params: RequestParams = {}) =>
    this.request<DeprecatedWorkflow[], void>({
      path: `/rest/api/2/workflow`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a workflow. You can define transition rules using the shapes detailed in the following sections. If no transitional rules are specified the default system transition rules are used. #### Conditions #### Conditions enable workflow rules that govern whether a transition can execute. ##### Always false condition ##### A condition that always fails. { "type": "AlwaysFalseCondition" } ##### Block transition until approval ##### A condition that blocks issue transition if there is a pending approval. { "type": "BlockInProgressApprovalCondition" } ##### Compare number custom field condition ##### A condition that allows transition if a comparison between a number custom field and a value is true. { "type": "CompareNumberCFCondition", "configuration": { "comparator": "=", "fieldId": "customfield_10029", "fieldValue": 2 } } *  `comparator` One of the supported comparator: `=`, `>`, and `<`. *  `fieldId` The custom numeric field ID. Allowed field types: *  `com.atlassian.jira.plugin.system.customfieldtypes:float` *  `com.pyxis.greenhopper.jira:jsw-story-points` *  `fieldValue` The value for comparison. ##### Hide from user condition ##### A condition that hides a transition from users. The transition can only be triggered from a workflow function or REST API operation. { "type": "RemoteOnlyCondition" } ##### Only assignee condition ##### A condition that allows only the assignee to execute a transition. { "type": "AllowOnlyAssignee" } ##### Only Bamboo notifications workflow condition ##### A condition that makes the transition available only to Bamboo build notifications. { "type": "OnlyBambooNotificationsCondition" } ##### Only reporter condition ##### A condition that allows only the reporter to execute a transition. { "type": "AllowOnlyReporter" } ##### Permission condition ##### A condition that allows only users with a permission to execute a transition. { "type": "PermissionCondition", "configuration": { "permissionKey": "BROWSE_PROJECTS" } } *  `permissionKey` The permission required to perform the transition. Allowed values: [built-in](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permission-schemes/#built-in-permissions) or app defined permissions. ##### Previous status condition ##### A condition that allows a transition based on whether an issue has or has not transitioned through a status. { "type": "PreviousStatusCondition", "configuration": { "ignoreLoopTransitions": true, "includeCurrentStatus": true, "mostRecentStatusOnly": true, "reverseCondition": true, "previousStatus": { "id": "5" } } } By default this condition allows the transition if the status, as defined by its ID in the `previousStatus` object, matches any previous issue status, unless: *  `ignoreLoopTransitions` is `true`, then loop transitions (from and to the same status) are ignored. *  `includeCurrentStatus` is `true`, then the current issue status is also checked. *  `mostRecentStatusOnly` is `true`, then only the issue's preceding status (the one immediately before the current status) is checked. *  `reverseCondition` is `true`, then the status must not be present. ##### Separation of duties condition ##### A condition that prevents a user to perform the transition, if the user has already performed a transition on the issue. { "type": "SeparationOfDutiesCondition", "configuration": { "fromStatus": { "id": "5" }, "toStatus": { "id": "6" } } } *  `fromStatus` OPTIONAL. An object containing the ID of the source status of the transition that is blocked. If omitted any transition to `toStatus` is blocked. *  `toStatus` An object containing the ID of the target status of the transition that is blocked. ##### Subtask blocking condition ##### A condition that blocks transition on a parent issue if any of its subtasks are in any of one or more statuses. { "type": "SubTaskBlockingCondition", "configuration": { "statuses": [ { "id": "1" }, { "id": "3" } ] } } *  `statuses` A list of objects containing status IDs. ##### User is in any group condition ##### A condition that allows users belonging to any group from a list of groups to execute a transition. { "type": "UserInAnyGroupCondition", "configuration": { "groups": [ "administrators", "atlassian-addons-admin" ] } } *  `groups` A list of group names. ##### User is in any project role condition ##### A condition that allows only users with at least one project roles from a list of project roles to execute a transition. { "type": "InAnyProjectRoleCondition", "configuration": { "projectRoles": [ { "id": "10002" }, { "id": "10003" }, { "id": "10012" }, { "id": "10013" } ] } } *  `projectRoles` A list of objects containing project role IDs. ##### User is in custom field condition ##### A condition that allows only users listed in a given custom field to execute the transition. { "type": "UserIsInCustomFieldCondition", "configuration": { "allowUserInField": false, "fieldId": "customfield_10010" } } *  `allowUserInField` If `true` only a user who is listed in `fieldId` can perform the transition, otherwise, only a user who is not listed in `fieldId` can perform the transition. *  `fieldId` The ID of the field containing the list of users. ##### User is in group condition ##### A condition that allows users belonging to a group to execute a transition. { "type": "UserInGroupCondition", "configuration": { "group": "administrators" } } *  `group` The name of the group. ##### User is in group custom field condition ##### A condition that allows users belonging to a group specified in a custom field to execute a transition. { "type": "InGroupCFCondition", "configuration": { "fieldId": "customfield_10012" } } *  `fieldId` The ID of the field. Allowed field types: *  `com.atlassian.jira.plugin.system.customfieldtypes:multigrouppicker` *  `com.atlassian.jira.plugin.system.customfieldtypes:grouppicker` *  `com.atlassian.jira.plugin.system.customfieldtypes:select` *  `com.atlassian.jira.plugin.system.customfieldtypes:multiselect` *  `com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons` *  `com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes` *  `com.pyxis.greenhopper.jira:gh-epic-status` ##### User is in project role condition ##### A condition that allows users with a project role to execute a transition. { "type": "InProjectRoleCondition", "configuration": { "projectRole": { "id": "10002" } } } *  `projectRole` An object containing the ID of a project role. ##### Value field condition ##### A conditions that allows a transition to execute if the value of a field is equal to a constant value or simply set. { "type": "ValueFieldCondition", "configuration": { "fieldId": "assignee", "fieldValue": "qm:6e1ecee6-8e64-4db6-8c85-916bb3275f51:54b56885-2bd2-4381-8239-78263442520f", "comparisonType": "NUMBER", "comparator": "=" } } *  `fieldId` The ID of a field used in the comparison. *  `fieldValue` The expected value of the field. *  `comparisonType` The type of the comparison. Allowed values: `STRING`, `NUMBER`, `DATE`, `DATE_WITHOUT_TIME`, or `OPTIONID`. *  `comparator` One of the supported comparator: `>`, `>=`, `=`, `<=`, `<`, `!=`. **Notes:** *  If you choose the comparison type `STRING`, only `=` and `!=` are valid options. *  You may leave `fieldValue` empty when comparison type is `!=` to indicate that a value is required in the field. *  For date fields without time format values as `yyyy-MM-dd`, and for those with time as `yyyy-MM-dd HH:mm`. For example, for July 16 2021 use `2021-07-16`, for 8:05 AM use `2021-07-16 08:05`, and for 4 PM: `2021-07-16 16:00`. #### Validators #### Validators check that any input made to the transition is valid before the transition is performed. ##### Date field validator ##### A validator that compares two dates. { "type": "DateFieldValidator", "configuration": { "comparator": ">", "date1": "updated", "date2": "created", "expression": "1d", "includeTime": true } } *  `comparator` One of the supported comparator: `>`, `>=`, `=`, `<=`, `<`, or `!=`. *  `date1` The date field to validate. Allowed field types: *  `com.atlassian.jira.plugin.system.customfieldtypes:datepicker` *  `com.atlassian.jira.plugin.system.customfieldtypes:datetime` *  `com.atlassian.jpo:jpo-custom-field-baseline-end` *  `com.atlassian.jpo:jpo-custom-field-baseline-start` *  `duedate` *  `created` *  `updated` *  `Resolved` *  `date2` The second date field. Required, if `expression` is not passed. Allowed field types: *  `com.atlassian.jira.plugin.system.customfieldtypes:datepicker` *  `com.atlassian.jira.plugin.system.customfieldtypes:datetime` *  `com.atlassian.jpo:jpo-custom-field-baseline-end` *  `com.atlassian.jpo:jpo-custom-field-baseline-start` *  `duedate` *  `created` *  `updated` *  `Resolved` *  `expression` An expression specifying an offset. Required, if `date2` is not passed. Offsets are built with a number, with `-` as prefix for the past, and one of these time units: `d` for day, `w` for week, `m` for month, or `y` for year. For example, -2d means two days into the past and 1w means one week into the future. The `now` keyword enables a comparison with the current date. *  `includeTime` If `true`, then the time part of the data is included for the comparison. If the field doesn't have a time part, 00:00:00 is used. ##### Windows date validator ##### A validator that checks that a date falls on or after a reference date and before or on the reference date plus a number of days. { "type": "WindowsDateValidator", "configuration": { "date1": "customfield_10009", "date2": "created", "windowsDays": 5 } } *  `date1` The date field to validate. Allowed field types: *  `com.atlassian.jira.plugin.system.customfieldtypes:datepicker` *  `com.atlassian.jira.plugin.system.customfieldtypes:datetime` *  `com.atlassian.jpo:jpo-custom-field-baseline-end` *  `com.atlassian.jpo:jpo-custom-field-baseline-start` *  `duedate` *  `created` *  `updated` *  `Resolved` *  `date2` The reference date. Allowed field types: *  `com.atlassian.jira.plugin.system.customfieldtypes:datepicker` *  `com.atlassian.jira.plugin.system.customfieldtypes:datetime` *  `com.atlassian.jpo:jpo-custom-field-baseline-end` *  `com.atlassian.jpo:jpo-custom-field-baseline-start` *  `duedate` *  `created` *  `updated` *  `Resolved` *  `windowsDays` A positive integer indicating a number of days. ##### Field required validator ##### A validator that checks fields are not empty. By default, if a field is not included in the current context it's ignored and not validated. { "type": "FieldRequiredValidator", "configuration": { "ignoreContext": true, "errorMessage": "Hey", "fieldIds": [ "versions", "customfield_10037", "customfield_10003" ] } } *  `ignoreContext` If `true`, then the context is ignored and all the fields are validated. *  `errorMessage` OPTIONAL. The error message displayed when one or more fields are empty. A default error message is shown if an error message is not provided. *  `fieldIds` The list of fields to validate. ##### Field changed validator ##### A validator that checks that a field value is changed. However, this validation can be ignored for users from a list of groups. { "type": "FieldChangedValidator", "configuration": { "fieldId": "comment", "errorMessage": "Hey", "exemptedGroups": [ "administrators", "atlassian-addons-admin" ] } } *  `fieldId` The ID of a field. *  `errorMessage` OPTIONAL. The error message displayed if the field is not changed. A default error message is shown if the error message is not provided. *  `exemptedGroups` OPTIONAL. The list of groups. ##### Field has single value validator ##### A validator that checks that a multi-select field has only one value. Optionally, the validation can ignore values copied from subtasks. { "type": "FieldHasSingleValueValidator", "configuration": { "fieldId": "attachment, "excludeSubtasks": true } } *  `fieldId` The ID of a field. *  `excludeSubtasks` If `true`, then values copied from subtasks are ignored. ##### Parent status validator ##### A validator that checks the status of the parent issue of a subtask. Ìf the issue is not a subtask, no validation is performed. { "type": "ParentStatusValidator", "configuration": { "parentStatuses": [ { "id":"1" }, { "id":"2" } ] } } *  `parentStatus` The list of required parent issue statuses. ##### Permission validator ##### A validator that checks the user has a permission. { "type": "PermissionValidator", "configuration": { "permissionKey": "ADMINISTER_PROJECTS" } } *  `permissionKey` The permission required to perform the transition. Allowed values: [built-in](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permission-schemes/#built-in-permissions) or app defined permissions. ##### Previous status validator ##### A validator that checks if the issue has held a status. { "type": "PreviousStatusValidator", "configuration": { "mostRecentStatusOnly": false, "previousStatus": { "id": "15" } } } *  `mostRecentStatusOnly` If `true`, then only the issue's preceding status (the one immediately before the current status) is checked. *  `previousStatus` An object containing the ID of an issue status. ##### Regular expression validator ##### A validator that checks the content of a field against a regular expression. { "type": "RegexpFieldValidator", "configuration": { "regExp": "[0-9]", "fieldId": "customfield_10029" } } *  `regExp`A regular expression. *  `fieldId` The ID of a field. Allowed field types: *  `com.atlassian.jira.plugin.system.customfieldtypes:select` *  `com.atlassian.jira.plugin.system.customfieldtypes:multiselect` *  `com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons` *  `com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes` *  `com.atlassian.jira.plugin.system.customfieldtypes:textarea` *  `com.atlassian.jira.plugin.system.customfieldtypes:textfield` *  `com.atlassian.jira.plugin.system.customfieldtypes:url` *  `com.atlassian.jira.plugin.system.customfieldtypes:float` *  `com.pyxis.greenhopper.jira:jsw-story-points` *  `com.pyxis.greenhopper.jira:gh-epic-status` *  `description` *  `summary` ##### User permission validator ##### A validator that checks if a user has a permission. Obsolete. You may encounter this validator when getting transition rules and can pass it when updating or creating rules, for example, when you want to duplicate the rules from a workflow on a new workflow. { "type": "UserPermissionValidator", "configuration": { "permissionKey": "BROWSE_PROJECTS", "nullAllowed": false, "username": "TestUser" } } *  `permissionKey` The permission to be validated. Allowed values: [built-in](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-permission-schemes/#built-in-permissions) or app defined permissions. *  `nullAllowed` If `true`, allows the transition when `username` is empty. *  `username` The username to validate against the `permissionKey`. #### Post functions #### Post functions carry out any additional processing required after a Jira workflow transition is executed. ##### Fire issue event function ##### A post function that fires an event that is processed by the listeners. { "type": "FireIssueEventFunction", "configuration": { "event": { "id":"1" } } } **Note:** If provided, this post function overrides the default `FireIssueEventFunction`. Can be included once in a transition. *  `event` An object containing the ID of the issue event. ##### Update issue status ##### A post function that sets issue status to the linked status of the destination workflow status. { "type": "UpdateIssueStatusFunction" } **Note:** This post function is a default function in global and directed transitions. It can only be added to the initial transition and can only be added once. ##### Create comment ##### A post function that adds a comment entered during the transition to an issue. { "type": "CreateCommentFunction" } **Note:** This post function is a default function in global and directed transitions. It can only be added to the initial transition and can only be added once. ##### Store issue ##### A post function that stores updates to an issue. { "type": "IssueStoreFunction" } **Note:** This post function can only be added to the initial transition and can only be added once. ##### Assign to current user function ##### A post function that assigns the issue to the current user if the current user has the `ASSIGNABLE_USER` permission. { "type": "AssignToCurrentUserFunction" } **Note:** This post function can be included once in a transition. ##### Assign to lead function ##### A post function that assigns the issue to the project or component lead developer. { "type": "AssignToLeadFunction" } **Note:** This post function can be included once in a transition. ##### Assign to reporter function ##### A post function that assigns the issue to the reporter. { "type": "AssignToReporterFunction" } **Note:** This post function can be included once in a transition. ##### Clear field value function ##### A post function that clears the value from a field. { "type": "ClearFieldValuePostFunction", "configuration": { "fieldId": "assignee" } } *  `fieldId` The ID of the field. ##### Copy value from other field function ##### A post function that copies the value of one field to another, either within an issue or from parent to subtask. { "type": "CopyValueFromOtherFieldPostFunction", "configuration": { "sourceFieldId": "assignee", "destinationFieldId": "creator", "copyType": "same" } } *  `sourceFieldId` The ID of the source field. *  `destinationFieldId` The ID of the destination field. *  `copyType` Use `same` to copy the value from a field inside the issue, or `parent` to copy the value from the parent issue. ##### Create Crucible review workflow function ##### A post function that creates a Crucible review for all unreviewed code for the issue. { "type": "CreateCrucibleReviewWorkflowFunction" } **Note:** This post function can be included once in a transition. ##### Set issue security level based on user's project role function ##### A post function that sets the issue's security level if the current user has a project role. { "type": "SetIssueSecurityFromRoleFunction", "configuration": { "projectRole": { "id":"10002" }, "issueSecurityLevel": { "id":"10000" } } } *  `projectRole` An object containing the ID of the project role. *  `issueSecurityLevel` OPTIONAL. The object containing the ID of the security level. If not passed, then the security level is set to `none`. ##### Trigger a webhook function ##### A post function that triggers a webhook. { "type": "TriggerWebhookFunction", "configuration": { "webhook": { "id": "1" } } } *  `webhook` An object containing the ID of the webhook listener to trigger. ##### Update issue custom field function ##### A post function that updates the content of an issue custom field. { "type": "UpdateIssueCustomFieldPostFunction", "configuration": { "mode": "append", "fieldId": "customfield_10003", "fieldValue": "yikes" } } *  `mode` Use `replace` to override the field content with `fieldValue` or `append` to add `fieldValue` to the end of the field content. *  `fieldId` The ID of the field. *  `fieldValue` The update content. ##### Update issue field function ##### A post function that updates a simple issue field. { "type": "UpdateIssueFieldFunction", "configuration": { "fieldId": "assignee", "fieldValue": "5f0c277e70b8a90025a00776" } } *  `fieldId` The ID of the field. Allowed field types: *  `assignee` *  `description` *  `environment` *  `priority` *  `resolution` *  `summary` *  `timeoriginalestimate` *  `timeestimate` *  `timespent` *  `fieldValue` The update value. *  If the `fieldId` is `assignee`, the `fieldValue` should be one of these values: *  an account ID. *  `automatic`. *  a blank string, which sets the value to `unassigned`. #### Connect rules #### Connect rules are conditions, validators, and post functions of a transition that are registered by Connect apps. To create a rule registered by the app, the app must be enabled and the rule's module must exist. { "type": "appKey__moduleKey", "configuration": { "value":"{\"isValid\":\"true\"}" } } *  `type` A Connect rule key in a form of `appKey__moduleKey`. *  `value` The stringified JSON configuration of a Connect rule. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflows
   * @name CreateWorkflow
   * @summary Create workflow
   * @request POST:/rest/api/2/workflow
   * @secure
   */
  createWorkflow = (data: CreateWorkflowDetails, params: RequestParams = {}) =>
    this.request<WorkflowIDs, void>({
      path: `/rest/api/2/workflow`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of workflows with transition rules. The workflows can be filtered to return only those containing workflow transition rules: *  of one or more transition rule types, such as [workflow post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/). *  matching one or more transition rule keys. Only workflows containing transition rules created by the calling Connect app are returned. However, if a workflow is returned all transition rules that match the filters are returned for that workflow. Due to server-side optimizations, workflows with an empty list of rules may be returned; these workflows can be ignored. **[Permissions](#permissions) required:** Only Connect apps can use this operation.
   *
   * @tags Workflow transition rules
   * @name GetWorkflowTransitionRuleConfigurations
   * @summary Get workflow transition rule configurations
   * @request GET:/rest/api/2/workflow/rule/config
   * @secure
   */
  getWorkflowTransitionRuleConfigurations = (
    query: {
      startAt?: number;
      maxResults?: number;
      types: ('postfunction' | 'condition' | 'validator')[];
      keys?: string[];
      workflowNames?: string[];
      withTags?: string[];
      draft?: boolean;
      expand?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanWorkflowTransitionRules, ErrorCollection | void>({
      path: `/rest/api/2/workflow/rule/config`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates configuration of workflow transition rules. The following rule types are supported: *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/) *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/) *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/) Only rules created by the calling Connect app can be updated. To assist with app migration, this operation can be used to: *  Disable a rule. *  Add a `tag`. Use this to filter rules in the [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get). Rules are enabled if the `disabled` parameter is not provided. **[Permissions](#permissions) required:** Only Connect apps can use this operation.
   *
   * @tags Workflow transition rules
   * @name UpdateWorkflowTransitionRuleConfigurations
   * @summary Update workflow transition rule configurations
   * @request PUT:/rest/api/2/workflow/rule/config
   * @secure
   */
  updateWorkflowTransitionRuleConfigurations = (data: WorkflowTransitionRulesUpdate, params: RequestParams = {}) =>
    this.request<WorkflowTransitionRulesUpdateErrors, ErrorCollection>({
      path: `/rest/api/2/workflow/rule/config`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes workflow transition rules from one or more workflows. These rule types are supported: *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/) *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/) *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/) Only rules created by the calling Connect app can be deleted. **[Permissions](#permissions) required:** Only Connect apps can use this operation.
   *
   * @tags Workflow transition rules
   * @name DeleteWorkflowTransitionRuleConfigurations
   * @summary Delete workflow transition rule configurations
   * @request PUT:/rest/api/2/workflow/rule/config/delete
   * @secure
   */
  deleteWorkflowTransitionRuleConfigurations = (
    data: WorkflowsWithTransitionRulesDetails,
    params: RequestParams = {},
  ) =>
    this.request<WorkflowTransitionRulesUpdateErrors, ErrorCollection>({
      path: `/rest/api/2/workflow/rule/config/delete`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of published classic workflows. When workflow names are specified, details of those workflows are returned. Otherwise, all published classic workflows are returned. This operation does not return next-gen workflows. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflows
   * @name GetWorkflowsPaginated
   * @summary Get workflows paginated
   * @request GET:/rest/api/2/workflow/search
   * @secure
   */
  getWorkflowsPaginated = (
    query?: { startAt?: number; maxResults?: number; workflowName?: string[]; expand?: string },
    params: RequestParams = {},
  ) =>
    this.request<PageBeanWorkflow, void | ErrorCollection>({
      path: `/rest/api/2/workflow/search`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow transition properties
   * @name GetWorkflowTransitionProperties
   * @summary Get workflow transition properties
   * @request GET:/rest/api/2/workflow/transitions/{transitionId}/properties
   * @secure
   */
  getWorkflowTransitionProperties = (
    transitionId: number,
    query: { includeReservedKeys?: boolean; key?: string; workflowName: string; workflowMode?: 'live' | 'draft' },
    params: RequestParams = {},
  ) =>
    this.request<WorkflowTransitionProperty, void>({
      path: `/rest/api/2/workflow/transitions/${transitionId}/properties`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow transition properties
   * @name UpdateWorkflowTransitionProperty
   * @summary Update workflow transition property
   * @request PUT:/rest/api/2/workflow/transitions/{transitionId}/properties
   * @secure
   */
  updateWorkflowTransitionProperty = (
    transitionId: number,
    query: { key: string; workflowName: string; workflowMode?: 'live' | 'draft' },
    data: WorkflowTransitionProperty,
    params: RequestParams = {},
  ) =>
    this.request<WorkflowTransitionProperty, void>({
      path: `/rest/api/2/workflow/transitions/${transitionId}/properties`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow transition properties
   * @name CreateWorkflowTransitionProperty
   * @summary Create workflow transition property
   * @request POST:/rest/api/2/workflow/transitions/{transitionId}/properties
   * @secure
   */
  createWorkflowTransitionProperty = (
    transitionId: number,
    query: { key: string; workflowName: string; workflowMode?: 'live' | 'draft' },
    data: WorkflowTransitionProperty,
    params: RequestParams = {},
  ) =>
    this.request<WorkflowTransitionProperty, void>({
      path: `/rest/api/2/workflow/transitions/${transitionId}/properties`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow transition properties
   * @name DeleteWorkflowTransitionProperty
   * @summary Delete workflow transition property
   * @request DELETE:/rest/api/2/workflow/transitions/{transitionId}/properties
   * @secure
   */
  deleteWorkflowTransitionProperty = (
    transitionId: number,
    query: { key: string; workflowName: string; workflowMode?: 'live' | 'draft' },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/rest/api/2/workflow/transitions/${transitionId}/properties`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Deletes a workflow. The workflow cannot be deleted if it is: *  an active workflow. *  a system workflow. *  associated with any workflow scheme. *  associated with any draft workflow scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflows
   * @name DeleteInactiveWorkflow
   * @summary Delete inactive workflow
   * @request DELETE:/rest/api/2/workflow/{entityId}
   * @secure
   */
  deleteInactiveWorkflow = (entityId: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/workflow/${entityId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns a [paginated](#pagination) list of all workflow schemes, not including draft workflow schemes. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name GetAllWorkflowSchemes
   * @summary Get all workflow schemes
   * @request GET:/rest/api/2/workflowscheme
   * @secure
   */
  getAllWorkflowSchemes = (query?: { startAt?: number; maxResults?: number }, params: RequestParams = {}) =>
    this.request<PageBeanWorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Creates a workflow scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name CreateWorkflowScheme
   * @summary Create workflow scheme
   * @request POST:/rest/api/2/workflowscheme
   * @secure
   */
  createWorkflowScheme = (data: WorkflowScheme, params: RequestParams = {}) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of the workflow schemes associated with a list of projects. Each returned workflow scheme includes a list of the requested projects associated with it. Any team-managed or non-existent projects in the request are ignored and no errors are returned. If the project is associated with the `Default Workflow Scheme` no ID is returned. This is because the way the `Default Workflow Scheme` is stored means it has no ID. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme project associations
   * @name GetWorkflowSchemeProjectAssociations
   * @summary Get workflow scheme project associations
   * @request GET:/rest/api/2/workflowscheme/project
   * @secure
   */
  getWorkflowSchemeProjectAssociations = (query: { projectId: number[] }, params: RequestParams = {}) =>
    this.request<ContainerOfWorkflowSchemeAssociations, void>({
      path: `/rest/api/2/workflowscheme/project`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Assigns a workflow scheme to a project. This operation is performed only when there are no issues in the project. Workflow schemes can only be assigned to classic projects. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme project associations
   * @name AssignSchemeToProject
   * @summary Assign workflow scheme to project
   * @request PUT:/rest/api/2/workflowscheme/project
   * @secure
   */
  assignSchemeToProject = (data: WorkflowSchemeProjectAssociation, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/api/2/workflowscheme/project`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a workflow scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name GetWorkflowScheme
   * @summary Get workflow scheme
   * @request GET:/rest/api/2/workflowscheme/{id}
   * @secure
   */
  getWorkflowScheme = (id: number, query?: { returnDraftIfExists?: boolean }, params: RequestParams = {}) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that `updateDraftIfNeeded` is set to `true`. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name UpdateWorkflowScheme
   * @summary Update workflow scheme
   * @request PUT:/rest/api/2/workflowscheme/{id}
   * @secure
   */
  updateWorkflowScheme = (id: number, data: WorkflowScheme, params: RequestParams = {}) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name DeleteWorkflowScheme
   * @summary Delete workflow scheme
   * @request DELETE:/rest/api/2/workflowscheme/{id}
   * @secure
   */
  deleteWorkflowScheme = (id: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/workflowscheme/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name CreateWorkflowSchemeDraftFromParent
   * @summary Create draft workflow scheme
   * @request POST:/rest/api/2/workflowscheme/{id}/createdraft
   * @secure
   */
  createWorkflowSchemeDraftFromParent = (id: number, params: RequestParams = {}) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/createdraft`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue Types* listed in its issue types for the workflow scheme in Jira. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name GetDefaultWorkflow
   * @summary Get default workflow
   * @request GET:/rest/api/2/workflowscheme/{id}/default
   * @secure
   */
  getDefaultWorkflow = (id: number, query?: { returnDraftIfExists?: boolean }, params: RequestParams = {}) =>
    this.request<DefaultWorkflow, void>({
      path: `/rest/api/2/workflowscheme/${id}/default`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the default workflow for a workflow scheme. Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` in the request object and a draft workflow scheme is created or updated with the new default workflow. The draft workflow scheme can be published in Jira. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name UpdateDefaultWorkflow
   * @summary Update default workflow
   * @request PUT:/rest/api/2/workflowscheme/{id}/default
   * @secure
   */
  updateDefaultWorkflow = (id: number, data: DefaultWorkflow, params: RequestParams = {}) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/default`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira's system workflow (the *jira* workflow). Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` and a draft workflow scheme is created or updated with the default workflow reset. The draft workflow scheme can be published in Jira. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name DeleteDefaultWorkflow
   * @summary Delete default workflow
   * @request DELETE:/rest/api/2/workflowscheme/{id}/default
   * @secure
   */
  deleteDefaultWorkflow = (id: number, query?: { updateDraftIfNeeded?: boolean }, params: RequestParams = {}) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/default`,
      method: 'DELETE',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See [Configuring workflow schemes](https://confluence.atlassian.com/x/tohKLg) for more information. Note that: *  Only active workflow schemes can have draft workflow schemes. *  An active workflow scheme can only have one draft workflow scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name GetWorkflowSchemeDraft
   * @summary Get draft workflow scheme
   * @request GET:/rest/api/2/workflowscheme/{id}/draft
   * @secure
   */
  getWorkflowSchemeDraft = (id: number, params: RequestParams = {}) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name UpdateWorkflowSchemeDraft
   * @summary Update draft workflow scheme
   * @request PUT:/rest/api/2/workflowscheme/{id}/draft
   * @secure
   */
  updateWorkflowSchemeDraft = (id: number, data: WorkflowScheme, params: RequestParams = {}) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes a draft workflow scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name DeleteWorkflowSchemeDraft
   * @summary Delete draft workflow scheme
   * @request DELETE:/rest/api/2/workflowscheme/{id}/draft
   * @secure
   */
  deleteWorkflowSchemeDraft = (id: number, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
   * @description Returns the default workflow for a workflow scheme's draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue Types* listed in its issue types for the workflow scheme in Jira. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name GetDraftDefaultWorkflow
   * @summary Get draft default workflow
   * @request GET:/rest/api/2/workflowscheme/{id}/draft/default
   * @secure
   */
  getDraftDefaultWorkflow = (id: number, params: RequestParams = {}) =>
    this.request<DefaultWorkflow, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft/default`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the default workflow for a workflow scheme's draft. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name UpdateDraftDefaultWorkflow
   * @summary Update draft default workflow
   * @request PUT:/rest/api/2/workflowscheme/{id}/draft/default
   * @secure
   */
  updateDraftDefaultWorkflow = (id: number, data: DefaultWorkflow, params: RequestParams = {}) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft/default`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Resets the default workflow for a workflow scheme's draft. That is, the default workflow is set to Jira's system workflow (the *jira* workflow). **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name DeleteDraftDefaultWorkflow
   * @summary Delete draft default workflow
   * @request DELETE:/rest/api/2/workflowscheme/{id}/draft/default
   * @secure
   */
  deleteDraftDefaultWorkflow = (id: number, params: RequestParams = {}) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft/default`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the issue type-workflow mapping for an issue type in a workflow scheme's draft. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name GetWorkflowSchemeDraftIssueType
   * @summary Get workflow for issue type in draft workflow scheme
   * @request GET:/rest/api/2/workflowscheme/{id}/draft/issuetype/{issueType}
   * @secure
   */
  getWorkflowSchemeDraftIssueType = (id: number, issueType: string, params: RequestParams = {}) =>
    this.request<IssueTypeWorkflowMapping, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft/issuetype/${issueType}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the workflow for an issue type in a workflow scheme's draft. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name SetWorkflowSchemeDraftIssueType
   * @summary Set workflow for issue type in draft workflow scheme
   * @request PUT:/rest/api/2/workflowscheme/{id}/draft/issuetype/{issueType}
   * @secure
   */
  setWorkflowSchemeDraftIssueType = (
    id: number,
    issueType: string,
    data: IssueTypeWorkflowMapping,
    params: RequestParams = {},
  ) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft/issuetype/${issueType}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes the issue type-workflow mapping for an issue type in a workflow scheme's draft. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name DeleteWorkflowSchemeDraftIssueType
   * @summary Delete workflow for issue type in draft workflow scheme
   * @request DELETE:/rest/api/2/workflowscheme/{id}/draft/issuetype/{issueType}
   * @secure
   */
  deleteWorkflowSchemeDraftIssueType = (id: number, issueType: string, params: RequestParams = {}) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft/issuetype/${issueType}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Publishes a draft workflow scheme. Where the draft workflow includes new workflow statuses for an issue type, mappings are provided to update issues with the original workflow status to the new workflow status. This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain updates. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name PublishDraftWorkflowScheme
   * @summary Publish draft workflow scheme
   * @request POST:/rest/api/2/workflowscheme/{id}/draft/publish
   * @secure
   */
  publishDraftWorkflowScheme = (
    id: number,
    data: PublishDraftWorkflowScheme,
    query?: { validateOnly?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<void, TaskProgressBeanObject | void>({
      path: `/rest/api/2/workflowscheme/${id}/draft/publish`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns the workflow-issue type mappings for a workflow scheme's draft. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name GetDraftWorkflow
   * @summary Get issue types for workflows in draft workflow scheme
   * @request GET:/rest/api/2/workflowscheme/{id}/draft/workflow
   * @secure
   */
  getDraftWorkflow = (id: number, query?: { workflowName?: string }, params: RequestParams = {}) =>
    this.request<IssueTypesWorkflowMapping, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft/workflow`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the issue types for a workflow in a workflow scheme's draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name UpdateDraftWorkflowMapping
   * @summary Set issue types for workflow in workflow scheme
   * @request PUT:/rest/api/2/workflowscheme/{id}/draft/workflow
   * @secure
   */
  updateDraftWorkflowMapping = (
    id: number,
    query: { workflowName: string },
    data: IssueTypesWorkflowMapping,
    params: RequestParams = {},
  ) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft/workflow`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes the workflow-issue type mapping for a workflow in a workflow scheme's draft. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow scheme drafts
   * @name DeleteDraftWorkflowMapping
   * @summary Delete issue types for workflow in draft workflow scheme
   * @request DELETE:/rest/api/2/workflowscheme/{id}/draft/workflow
   * @secure
   */
  deleteDraftWorkflowMapping = (id: number, query: { workflowName: string }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/rest/api/2/workflowscheme/${id}/draft/workflow`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns the issue type-workflow mapping for an issue type in a workflow scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name GetWorkflowSchemeIssueType
   * @summary Get workflow for issue type in workflow scheme
   * @request GET:/rest/api/2/workflowscheme/{id}/issuetype/{issueType}
   * @secure
   */
  getWorkflowSchemeIssueType = (
    id: number,
    issueType: string,
    query?: { returnDraftIfExists?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<IssueTypeWorkflowMapping, void>({
      path: `/rest/api/2/workflowscheme/${id}/issuetype/${issueType}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the workflow for an issue type in a workflow scheme. Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` in the request body and a draft workflow scheme is created or updated with the new issue type-workflow mapping. The draft workflow scheme can be published in Jira. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name SetWorkflowSchemeIssueType
   * @summary Set workflow for issue type in workflow scheme
   * @request PUT:/rest/api/2/workflowscheme/{id}/issuetype/{issueType}
   * @secure
   */
  setWorkflowSchemeIssueType = (
    id: number,
    issueType: string,
    data: IssueTypeWorkflowMapping,
    params: RequestParams = {},
  ) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/issuetype/${issueType}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes the issue type-workflow mapping for an issue type in a workflow scheme. Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` and a draft workflow scheme is created or updated with the issue type-workflow mapping deleted. The draft workflow scheme can be published in Jira. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name DeleteWorkflowSchemeIssueType
   * @summary Delete workflow for issue type in workflow scheme
   * @request DELETE:/rest/api/2/workflowscheme/{id}/issuetype/{issueType}
   * @secure
   */
  deleteWorkflowSchemeIssueType = (
    id: number,
    issueType: string,
    query?: { updateDraftIfNeeded?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/issuetype/${issueType}`,
      method: 'DELETE',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the workflow-issue type mappings for a workflow scheme. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name GetWorkflow
   * @summary Get issue types for workflows in workflow scheme
   * @request GET:/rest/api/2/workflowscheme/{id}/workflow
   * @secure
   */
  getWorkflow = (
    id: number,
    query?: { workflowName?: string; returnDraftIfExists?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<IssueTypesWorkflowMapping, void>({
      path: `/rest/api/2/workflowscheme/${id}/workflow`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow. Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` in the request body and a draft workflow scheme is created or updated with the new workflow-issue types mappings. The draft workflow scheme can be published in Jira. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name UpdateWorkflowMapping
   * @summary Set issue types for workflow in workflow scheme
   * @request PUT:/rest/api/2/workflowscheme/{id}/workflow
   * @secure
   */
  updateWorkflowMapping = (
    id: number,
    query: { workflowName: string },
    data: IssueTypesWorkflowMapping,
    params: RequestParams = {},
  ) =>
    this.request<WorkflowScheme, void>({
      path: `/rest/api/2/workflowscheme/${id}/workflow`,
      method: 'PUT',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes the workflow-issue type mapping for a workflow in a workflow scheme. Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` and a draft workflow scheme is created or updated with the workflow-issue type mapping deleted. The draft workflow scheme can be published in Jira. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   *
   * @tags Workflow schemes
   * @name DeleteWorkflowMapping
   * @summary Delete issue types for workflow in workflow scheme
   * @request DELETE:/rest/api/2/workflowscheme/{id}/workflow
   * @secure
   */
  deleteWorkflowMapping = (
    id: number,
    query: { workflowName: string; updateDraftIfNeeded?: boolean },
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/rest/api/2/workflowscheme/${id}/workflow`,
      method: 'DELETE',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Returns a list of IDs and delete timestamps for worklogs deleted after a date and time. This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set to true on the last page of worklogs. This resource does not return worklogs deleted during the minute preceding the request. **[Permissions](#permissions) required:** Permission to access Jira.
   *
   * @tags Issue worklogs
   * @name GetIdsOfWorklogsDeletedSince
   * @summary Get IDs of deleted worklogs
   * @request GET:/rest/api/2/worklog/deleted
   * @secure
   */
  getIdsOfWorklogsDeletedSince = (query?: { since?: number }, params: RequestParams = {}) =>
    this.request<ChangedWorklogs, void>({
      path: `/rest/api/2/worklog/deleted`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns worklog details for a list of worklog IDs. The returned list of worklogs is limited to 1000 items. **[Permissions](#permissions) required:** Permission to access Jira, however, worklogs are only returned where either of the following is true: *  the worklog is set as *Viewable by All Users*. *  the user is a member of a project role or group with permission to view the worklog.
   *
   * @tags Issue worklogs
   * @name GetWorklogsForIds
   * @summary Get worklogs
   * @request POST:/rest/api/2/worklog/list
   * @secure
   */
  getWorklogsForIds = (data: WorklogIdsRequestBean, query?: { expand?: string }, params: RequestParams = {}) =>
    this.request<Worklog[], void>({
      path: `/rest/api/2/worklog/list`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Returns a list of IDs and update timestamps for worklogs updated after a date and time. This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set to true on the last page of worklogs. This resource does not return worklogs updated during the minute preceding the request. **[Permissions](#permissions) required:** Permission to access Jira, however, worklogs are only returned where either of the following is true: *  the worklog is set as *Viewable by All Users*. *  the user is a member of a project role or group with permission to view the worklog.
   *
   * @tags Issue worklogs
   * @name GetIdsOfWorklogsModifiedSince
   * @summary Get IDs of updated worklogs
   * @request GET:/rest/api/2/worklog/updated
   * @secure
   */
  getIdsOfWorklogsModifiedSince = (query?: { since?: number; expand?: string }, params: RequestParams = {}) =>
    this.request<ChangedWorklogs, void>({
      path: `/rest/api/2/worklog/updated`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Gets all the properties of an app. **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
   *
   * @tags App properties
   * @name AddonPropertiesResourceGetAddonPropertiesGet
   * @summary Get app properties
   * @request GET:/rest/atlassian-connect/1/addons/{addonKey}/properties
   */
  addonPropertiesResourceGetAddonPropertiesGet = (addonKey: string, params: RequestParams = {}) =>
    this.request<PropertyKeys, OperationMessage>({
      path: `/rest/atlassian-connect/1/addons/${addonKey}/properties`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description Returns the key and value of an app's property. **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
   *
   * @tags App properties
   * @name AddonPropertiesResourceGetAddonPropertyGet
   * @summary Get app property
   * @request GET:/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}
   */
  addonPropertiesResourceGetAddonPropertyGet = (addonKey: string, propertyKey: string, params: RequestParams = {}) =>
    this.request<EntityProperty, OperationMessage>({
      path: `/rest/atlassian-connect/1/addons/${addonKey}/properties/${propertyKey}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description Sets the value of an app's property. Use this resource to store custom data for your app. The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters. **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
   *
   * @tags App properties
   * @name AddonPropertiesResourcePutAddonPropertyPut
   * @summary Set app property
   * @request PUT:/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}
   */
  addonPropertiesResourcePutAddonPropertyPut = (
    addonKey: string,
    propertyKey: string,
    data: any,
    params: RequestParams = {},
  ) =>
    this.request<OperationMessage, OperationMessage>({
      path: `/rest/atlassian-connect/1/addons/${addonKey}/properties/${propertyKey}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Deletes an app's property. **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
   *
   * @tags App properties
   * @name AddonPropertiesResourceDeleteAddonPropertyDelete
   * @summary Delete app property
   * @request DELETE:/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}
   */
  addonPropertiesResourceDeleteAddonPropertyDelete = (
    addonKey: string,
    propertyKey: string,
    params: RequestParams = {},
  ) =>
    this.request<void, OperationMessage>({
      path: `/rest/atlassian-connect/1/addons/${addonKey}/properties/${propertyKey}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * @description Returns all modules registered dynamically by the calling app. **[Permissions](#permissions) required:** Only Connect apps can make this request.
   *
   * @tags Dynamic modules
   * @name DynamicModulesResourceGetModulesGet
   * @summary Get modules
   * @request GET:/rest/atlassian-connect/1/app/module/dynamic
   */
  dynamicModulesResourceGetModulesGet = (params: RequestParams = {}) =>
    this.request<ConnectModules, ErrorMessage>({
      path: `/rest/atlassian-connect/1/app/module/dynamic`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description Registers a list of modules. **[Permissions](#permissions) required:** Only Connect apps can make this request.
   *
   * @tags Dynamic modules
   * @name DynamicModulesResourceRegisterModulesPost
   * @summary Register modules
   * @request POST:/rest/atlassian-connect/1/app/module/dynamic
   */
  dynamicModulesResourceRegisterModulesPost = (data: ConnectModules, params: RequestParams = {}) =>
    this.request<void, ErrorMessage>({
      path: `/rest/atlassian-connect/1/app/module/dynamic`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Remove all or a list of modules registered by the calling app. **[Permissions](#permissions) required:** Only Connect apps can make this request.
   *
   * @tags Dynamic modules
   * @name DynamicModulesResourceRemoveModulesDelete
   * @summary Remove modules
   * @request DELETE:/rest/atlassian-connect/1/app/module/dynamic
   */
  dynamicModulesResourceRemoveModulesDelete = (query?: { moduleKey?: string[] }, params: RequestParams = {}) =>
    this.request<void, ErrorMessage>({
      path: `/rest/atlassian-connect/1/app/module/dynamic`,
      method: 'DELETE',
      query: query,
      ...params,
    });
  /**
   * @description Updates the value of a custom field added by Connect apps on one or more issues. The values of up to 200 custom fields can be updated. **[Permissions](#permissions) required:** Only Connect apps can make this request.
   *
   * @tags App migration
   * @name AppIssueFieldValueUpdateResourceUpdateIssueFieldsPut
   * @summary Bulk update custom field value
   * @request PUT:/rest/atlassian-connect/1/migration/field
   */
  appIssueFieldValueUpdateResourceUpdateIssueFieldsPut = (data: ConnectCustomFieldValues, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/rest/atlassian-connect/1/migration/field`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Updates the values of multiple entity properties for an object, up to 50 updates per request. This operation is for use by Connect apps during app migration.
   *
   * @tags App migration
   * @name MigrationResourceUpdateEntityPropertiesValuePut
   * @summary Bulk update entity properties
   * @request PUT:/rest/atlassian-connect/1/migration/properties/{entityType}
   */
  migrationResourceUpdateEntityPropertiesValuePut = (
    entityType:
      | 'IssueProperty'
      | 'CommentProperty'
      | 'DashboardItemProperty'
      | 'IssueTypeProperty'
      | 'ProjectProperty'
      | 'UserProperty'
      | 'WorklogProperty'
      | 'BoardProperty'
      | 'SprintProperty',
    data: EntityPropertyDetails[],
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/rest/atlassian-connect/1/migration/properties/${entityType}`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns configurations for workflow transition rules migrated from server to cloud and owned by the calling Connect app.
   *
   * @tags App migration
   * @name MigrationResourceWorkflowRuleSearchPost
   * @summary Get workflow transition rule configurations
   * @request POST:/rest/atlassian-connect/1/migration/workflow/rule/search
   */
  migrationResourceWorkflowRuleSearchPost = (data: WorkflowRulesSearch, params: RequestParams = {}) =>
    this.request<WorkflowRulesSearchDetails, void>({
      path: `/rest/atlassian-connect/1/migration/workflow/rule/search`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
