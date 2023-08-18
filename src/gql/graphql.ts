/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AddResult = {
  chestNo: Scalars['Int']['input'];
  mark?: InputMaybe<Scalars['Float']['input']>;
};

export type Candidate = {
  __typename?: 'Candidate';
  adno?: Maybe<Scalars['Float']['output']>;
  candidateProgrammes?: Maybe<Array<CandidateProgramme>>;
  category?: Maybe<Category>;
  chestNO?: Maybe<Scalars['Int']['output']>;
  class?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  groupPoint?: Maybe<Scalars['Float']['output']>;
  /** Example field (placeholder) */
  id?: Maybe<Scalars['Int']['output']>;
  imageId?: Maybe<Scalars['String']['output']>;
  individualPoint?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  substitutesNew?: Maybe<Array<Substitute>>;
  substitutesOld?: Maybe<Array<Substitute>>;
  team?: Maybe<Team>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CandidateProgramme = {
  __typename?: 'CandidateProgramme';
  candidate?: Maybe<Candidate>;
  candidatesOfGroup?: Maybe<Array<Candidate>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  grade?: Maybe<Grade>;
  id?: Maybe<Scalars['Int']['output']>;
  judge1?: Maybe<Scalars['Float']['output']>;
  judge2?: Maybe<Scalars['Float']['output']>;
  judge3?: Maybe<Scalars['Float']['output']>;
  judge4?: Maybe<Scalars['Float']['output']>;
  judge5?: Maybe<Scalars['Float']['output']>;
  judge6?: Maybe<Scalars['Float']['output']>;
  judge7?: Maybe<Scalars['Float']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  mark?: Maybe<Scalars['Float']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Position>;
  programme?: Maybe<Programme>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Category = {
  __typename?: 'Category';
  candidates?: Maybe<Array<Candidate>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  credentials?: Maybe<Array<Credential>>;
  customSettings?: Maybe<Array<CustomSetting>>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  programmes?: Maybe<Array<Programme>>;
  section?: Maybe<Section>;
  settings?: Maybe<CategorySettings>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategorySettings = {
  __typename?: 'CategorySettings';
  category?: Maybe<Category>;
  id?: Maybe<Scalars['Int']['output']>;
  isProgrammeListUpdatable: Scalars['Boolean']['output'];
  maxGroup?: Maybe<Scalars['Int']['output']>;
  maxNonStage?: Maybe<Scalars['Int']['output']>;
  maxOutDoor?: Maybe<Scalars['Int']['output']>;
  maxProgram?: Maybe<Scalars['Int']['output']>;
  maxSingle?: Maybe<Scalars['Int']['output']>;
  maxStage?: Maybe<Scalars['Int']['output']>;
  minGroup?: Maybe<Scalars['Int']['output']>;
  minNonStage?: Maybe<Scalars['Int']['output']>;
  minOutDoor?: Maybe<Scalars['Int']['output']>;
  minProgram?: Maybe<Scalars['Int']['output']>;
  minSingle?: Maybe<Scalars['Int']['output']>;
  minStage?: Maybe<Scalars['Int']['output']>;
};

export type CreateCandidateInput = {
  adno?: InputMaybe<Scalars['Float']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  chestNO?: InputMaybe<Scalars['Int']['input']>;
  class?: InputMaybe<Scalars['Int']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  gender: Gender;
  name: Scalars['String']['input'];
  team?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCandidateProgrammeInput = {
  candidatesOfGroup?: InputMaybe<Array<Scalars['Int']['input']>>;
  chestNo: Scalars['Int']['input'];
  programme_code: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
  section: Scalars['String']['input'];
};

export type CreateCategorySettingInput = {
  category: Scalars['String']['input'];
  maxGroup: Scalars['Int']['input'];
  maxProgram: Scalars['Int']['input'];
  maxSingle: Scalars['Int']['input'];
  minGroup: Scalars['Int']['input'];
  minProgram: Scalars['Int']['input'];
  minSingle: Scalars['Int']['input'];
};

export type CreateCredentialInput = {
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  password: Scalars['String']['input'];
  roles: Roles;
  team?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type CreateCustomSettingInput = {
  category: Scalars['String']['input'];
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  programs: Array<Scalars['String']['input']>;
};

export type CreateDetailInput = {
  coverId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  institution: Scalars['String']['input'];
  isMediaHave?: Scalars['Boolean']['input'];
  isSkillHave?: Scalars['Boolean']['input'];
  logoId: Scalars['String']['input'];
  motto: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateFeedInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateGradeInput = {
  name: Scalars['String']['input'];
  percentage: Scalars['Int']['input'];
  pointGroup: Scalars['Int']['input'];
  pointHouse: Scalars['Int']['input'];
  pointSingle: Scalars['Int']['input'];
};

export type CreateInput = {
  inputs: Array<CreateCandidateInput>;
};

export type CreateJudgeInput = {
  judgeName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  programmeCode: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreatePositionInput = {
  name: Scalars['String']['input'];
  pointGroup: Scalars['Int']['input'];
  pointHouse: Scalars['Int']['input'];
  pointSingle: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};

export type CreateProgrammeInput = {
  candidateCount: Scalars['Int']['input'];
  category: Scalars['String']['input'];
  conceptNote: Scalars['String']['input'];
  date?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Int']['input'];
  groupCount?: InputMaybe<Scalars['Int']['input']>;
  mode: Mode;
  name: Scalars['String']['input'];
  programCode: Scalars['String']['input'];
  skill: Scalars['String']['input'];
  type: Type;
  venue?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateSchedule = {
  code: Scalars['String']['input'];
  date: Scalars['DateTime']['input'];
  venue?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateSectionInput = {
  name: Scalars['String']['input'];
};

export type CreateSkillInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  shortName: Scalars['String']['input'];
};

export type CreateSubstituteInput = {
  newCandidate: Scalars['Int']['input'];
  oldCandidate: Scalars['Int']['input'];
  programme: Scalars['String']['input'];
  reason: Scalars['String']['input'];
};

export type CreateTeamInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  shortName: Scalars['String']['input'];
};

export type Credential = {
  __typename?: 'Credential';
  categories?: Maybe<Array<Category>>;
  id?: Maybe<Scalars['Int']['output']>;
  roles?: Maybe<Roles>;
  team?: Maybe<Team>;
  username?: Maybe<Scalars['String']['output']>;
};

export type CustomSetting = {
  __typename?: 'CustomSetting';
  category?: Maybe<Category>;
  /** Date of creation */
  createdAt: Scalars['DateTime']['output'];
  /** Example field (placeholder) */
  id: Scalars['Int']['output'];
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  programmes?: Maybe<Array<Programme>>;
  /** Date of last update */
  updatedAt: Scalars['DateTime']['output'];
};

export type Detail = {
  __typename?: 'Detail';
  coverId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  institution?: Maybe<Scalars['String']['output']>;
  isMediaHave: Scalars['Boolean']['output'];
  isMultipleResultAllowed: Scalars['Boolean']['output'];
  isResultReady: Scalars['Boolean']['output'];
  isSkillHave: Scalars['Boolean']['output'];
  logoId?: Maybe<Scalars['String']['output']>;
  motto?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Feed = {
  __typename?: 'Feed';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** Example field (placeholder) */
  id: Scalars['Int']['output'];
  language: Language;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type Grade = {
  __typename?: 'Grade';
  candidateProgramme?: Maybe<Array<CandidateProgramme>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  percentage?: Maybe<Scalars['Int']['output']>;
  pointGroup?: Maybe<Scalars['Int']['output']>;
  pointHouse?: Maybe<Scalars['Int']['output']>;
  pointSingle?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Judge = {
  __typename?: 'Judge';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  judgeName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  programme?: Maybe<Programme>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export enum Language {
  Arabic = 'ARABIC',
  Bengali = 'BENGALI',
  English = 'ENGLISH',
  French = 'FRENCH',
  Hindi = 'HINDI',
  Kannada = 'KANNADA',
  Malayalam = 'MALAYALAM',
  Spanish = 'SPANISH',
  Tamil = 'TAMIL',
  Telugu = 'TELUGU',
  Urdu = 'URDU'
}

export type LoginType = {
  __typename?: 'LoginType';
  admin: Credential;
  token: Scalars['String']['output'];
};

export enum Mode {
  NonStage = 'NON_STAGE',
  OutdoorStage = 'OUTDOOR_STAGE',
  Stage = 'STAGE'
}

export enum Models {
  NonStage = 'NON_STAGE',
  OutdoorStage = 'OUTDOOR_STAGE',
  Stage = 'STAGE'
}

export type Mutation = {
  __typename?: 'Mutation';
  addNormalResult: Array<CandidateProgramme>;
  approveJudgeResult: Array<CandidateProgramme>;
  approveSubstitute: Substitute;
  createCandidate: Candidate;
  createCandidateProgramme: CandidateProgramme;
  createCategory: Category;
  createCategorySetting: CategorySettings;
  createCredential: Credential;
  createCustomSetting: CustomSetting;
  createDetail: Detail;
  createFeed: Feed;
  createGrade: Grade;
  createJudge: Judge;
  createManyCandidates: Array<Candidate>;
  createManyProgrammes: Array<Programme>;
  createPosition: Position;
  createProgramme: Programme;
  createSection: Section;
  createSkill: Skill;
  createSubstitute: Substitute;
  createTeam: Team;
  liveResult: Scalars['Int']['output'];
  login: LoginType;
  logout: Scalars['Boolean']['output'];
  publishResult: Programme;
  publishResults: Scalars['String']['output'];
  rejectSubstitute: Substitute;
  removeCandidate: Candidate;
  removeCandidateProgramme: CandidateProgramme;
  removeCategory: Category;
  removeCategorySetting: CategorySettings;
  removeCredential: Credential;
  removeCustomSetting: CustomSetting;
  removeFeed: Feed;
  removeGrade: Grade;
  removeJudge: Judge;
  removePosition: Position;
  removeProgramme: Programme;
  removeSchedule: Programme;
  removeSection: Section;
  removeSkill: Skill;
  removeSubstitute: Substitute;
  removeTeam: Team;
  setAnyIssue: Programme;
  setManySchedule: Array<Programme>;
  setSchedule: Programme;
  updateCandidate: Candidate;
  updateCandidateProgramme: CandidateProgramme;
  updateCategory: Category;
  updateCategorySetting: CategorySettings;
  updateCredential: Credential;
  updateCustomSetting: CustomSetting;
  updateDetail: Detail;
  updateFeed: Feed;
  updateGrade: Grade;
  updateJudge: Judge;
  updatePosition: Position;
  updateProgramme: Programme;
  updateSection: Section;
  updateSkill: Skill;
  updateSubstitute: Substitute;
  updateTeam: Team;
  uploadMarkByJudge: Scalars['String']['output'];
};


export type MutationAddNormalResultArgs = {
  addResult: ArrayInput;
  programmeCode: Scalars['String']['input'];
};


export type MutationApproveJudgeResultArgs = {
  judgeName: Scalars['String']['input'];
  programmeCode: Scalars['String']['input'];
};


export type MutationApproveSubstituteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationCreateCandidateArgs = {
  createCandidateInput: CreateCandidateInput;
};


export type MutationCreateCandidateProgrammeArgs = {
  createCandidateProgrammeInput: CreateCandidateProgrammeInput;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateCategorySettingArgs = {
  createCategorySettingInput: CreateCategorySettingInput;
};


export type MutationCreateCredentialArgs = {
  createCredentialInput: CreateCredentialInput;
};


export type MutationCreateCustomSettingArgs = {
  createCustomSettingInput: CreateCustomSettingInput;
};


export type MutationCreateDetailArgs = {
  createDetailInput: CreateDetailInput;
};


export type MutationCreateFeedArgs = {
  createFeedInput: CreateFeedInput;
};


export type MutationCreateGradeArgs = {
  createGradeInput: CreateGradeInput;
};


export type MutationCreateJudgeArgs = {
  createJudgeInput: CreateJudgeInput;
};


export type MutationCreateManyCandidatesArgs = {
  createCandidateInput: CreateInput;
};


export type MutationCreateManyProgrammesArgs = {
  createProgrammeInput: CreateInput;
};


export type MutationCreatePositionArgs = {
  createPositionInput: CreatePositionInput;
};


export type MutationCreateProgrammeArgs = {
  createProgrammeInput: CreateProgrammeInput;
};


export type MutationCreateSectionArgs = {
  createSectionInput: CreateSectionInput;
};


export type MutationCreateSkillArgs = {
  createSkillInput: CreateSkillInput;
};


export type MutationCreateSubstituteArgs = {
  createSubstituteInput: CreateSubstituteInput;
};


export type MutationCreateTeamArgs = {
  createTeamInput: CreateTeamInput;
};


export type MutationLiveResultArgs = {
  programmeCode: Array<Scalars['String']['input']>;
  timeInSec: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationPublishResultArgs = {
  programmeCode: Scalars['String']['input'];
};


export type MutationPublishResultsArgs = {
  programmeCode: Array<Scalars['String']['input']>;
};


export type MutationRejectSubstituteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCandidateArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCandidateProgrammeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCategorySettingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCredentialArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCustomSettingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveFeedArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveGradeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveJudgeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePositionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveProgrammeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveScheduleArgs = {
  code: Scalars['Int']['input'];
};


export type MutationRemoveSectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSkillArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSubstituteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTeamArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSetAnyIssueArgs = {
  code: Scalars['String']['input'];
  issue: Scalars['Boolean']['input'];
};


export type MutationSetManyScheduleArgs = {
  createScheduleInput: Array<ScheduleCreate>;
};


export type MutationSetScheduleArgs = {
  createScheduleInput: CreateSchedule;
};


export type MutationUpdateCandidateArgs = {
  updateCandidateInput: UpdateCandidateInput;
};


export type MutationUpdateCandidateProgrammeArgs = {
  updateCandidateProgrammeInput: UpdateCandidateProgrammeInput;
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateCategorySettingArgs = {
  updateCategorySettingInput: UpdateCategorySettingInput;
};


export type MutationUpdateCredentialArgs = {
  updateCredentialInput: UpdateCredentialInput;
};


export type MutationUpdateCustomSettingArgs = {
  updateCustomSettingInput: UpdateCustomSettingInput;
};


export type MutationUpdateDetailArgs = {
  updateDetailInput: UpdateDetailInput;
};


export type MutationUpdateFeedArgs = {
  updateFeedInput: UpdateFeedInput;
};


export type MutationUpdateGradeArgs = {
  updateGradeInput: UpdateGradeInput;
};


export type MutationUpdateJudgeArgs = {
  updateJudgeInput: UpdateJudgeInput;
};


export type MutationUpdatePositionArgs = {
  updatePositionInput: UpdatePositionInput;
};


export type MutationUpdateProgrammeArgs = {
  updateProgrammeInput: UpdateProgrammeInput;
};


export type MutationUpdateSectionArgs = {
  updateSectionInput: UpdateSectionInput;
};


export type MutationUpdateSkillArgs = {
  updateSkillInput: UpdateSkillInput;
};


export type MutationUpdateSubstituteArgs = {
  updateSubstituteInput: UpdateSubstituteInput;
};


export type MutationUpdateTeamArgs = {
  updateTeamInput: UpdateTeamInput;
};


export type MutationUploadMarkByJudgeArgs = {
  addResult: ArrayInput;
  jugdeId: Scalars['Float']['input'];
  programmeCode: Scalars['String']['input'];
};

export type Position = {
  __typename?: 'Position';
  candidateProgramme?: Maybe<Array<CandidateProgramme>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pointGroup?: Maybe<Scalars['Int']['output']>;
  pointHouse?: Maybe<Scalars['Int']['output']>;
  pointSingle?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type Programme = {
  __typename?: 'Programme';
  anyIssue: Scalars['Boolean']['output'];
  candidateCount?: Maybe<Scalars['Int']['output']>;
  candidateProgramme?: Maybe<Array<CandidateProgramme>>;
  category?: Maybe<Category>;
  checkToReadNo?: Maybe<Scalars['Int']['output']>;
  conceptNote?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customSetting?: Maybe<CustomSetting>;
  date?: Maybe<Scalars['DateTime']['output']>;
  duration: Scalars['Int']['output'];
  groupCount?: Maybe<Scalars['Int']['output']>;
  /** Example field (placeholder) */
  id?: Maybe<Scalars['Int']['output']>;
  judges?: Maybe<Array<Judge>>;
  mode?: Maybe<Models>;
  name?: Maybe<Scalars['String']['output']>;
  programCode?: Maybe<Scalars['String']['output']>;
  resultEntered: Scalars['Boolean']['output'];
  resultPublished: Scalars['Boolean']['output'];
  skill?: Maybe<Skill>;
  substitutes?: Maybe<Array<Substitute>>;
  totalMark?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Types>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  venue?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  candidate: Candidate;
  candidateProgramme: CandidateProgramme;
  candidateProgrammes: Array<CandidateProgramme>;
  candidates: Array<Candidate>;
  categories: Array<Category>;
  category: Category;
  categorySetting: CategorySettings;
  categorySettings: Array<CategorySettings>;
  checkLoggedIn: Credential;
  credential: Credential;
  credentials: Array<Credential>;
  customSetting: CustomSetting;
  customSettings: Array<CustomSetting>;
  details: Detail;
  feed: Feed;
  feeds: Array<Feed>;
  getCookieValue: Scalars['String']['output'];
  grade: Grade;
  grades: Array<Grade>;
  judge: Judge;
  judges: Array<Judge>;
  position: Position;
  positions: Array<Position>;
  programme: Programme;
  programmes: Array<Programme>;
  section: Section;
  sections: Array<Section>;
  skill: Skill;
  skills: Array<Skill>;
  substitute: Substitute;
  substitutes: Array<Substitute>;
  team: Team;
  teams: Array<Team>;
};


export type QueryCandidateArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCandidateProgrammeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCategorySettingArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCredentialArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCustomSettingArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFeedArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGradeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryJudgeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPositionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProgrammeArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySectionArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySkillArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySubstituteArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTeamArgs = {
  id: Scalars['Int']['input'];
};

export enum Roles {
  Admin = 'Admin',
  Controller = 'Controller',
  Judge = 'Judge',
  Media = 'Media',
  NormalUser = 'NormalUser',
  TeamManager = 'TeamManager'
}

export type ScheduleCreate = {
  inputs: Array<CreateSchedule>;
};

export type Section = {
  __typename?: 'Section';
  categories?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Skill = {
  __typename?: 'Skill';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  programmes?: Maybe<Array<Programme>>;
  shortName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Substitute = {
  __typename?: 'Substitute';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isAccepted?: Maybe<Scalars['Boolean']['output']>;
  isRejected?: Maybe<Scalars['Boolean']['output']>;
  newCandidate?: Maybe<Candidate>;
  oldCandidate?: Maybe<Candidate>;
  programme?: Maybe<Programme>;
  reason?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Team = {
  __typename?: 'Team';
  GroupPoint?: Maybe<Scalars['Float']['output']>;
  HousePoint?: Maybe<Scalars['Float']['output']>;
  IndividualPoint?: Maybe<Scalars['Float']['output']>;
  candidates?: Maybe<Array<Candidate>>;
  chestNoSeries?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  credentials?: Maybe<Array<Credential>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastResultPoint?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  totalPoint?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum Type {
  Group = 'GROUP',
  House = 'HOUSE',
  Single = 'SINGLE'
}

export enum Types {
  Group = 'GROUP',
  House = 'HOUSE',
  Single = 'SINGLE'
}

export type UpdateCandidateInput = {
  adno?: InputMaybe<Scalars['Float']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  chestNO?: InputMaybe<Scalars['Int']['input']>;
  class?: InputMaybe<Scalars['Int']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCandidateProgrammeInput = {
  candidatesOfGroup?: InputMaybe<Array<Scalars['Int']['input']>>;
  chestNo?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  programme_code?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategorySettingInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  maxGroup?: InputMaybe<Scalars['Int']['input']>;
  maxProgram?: InputMaybe<Scalars['Int']['input']>;
  maxSingle?: InputMaybe<Scalars['Int']['input']>;
  minGroup?: InputMaybe<Scalars['Int']['input']>;
  minProgram?: InputMaybe<Scalars['Int']['input']>;
  minSingle?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCredentialInput = {
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['Int']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Roles>;
  team?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomSettingInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  programs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateDetailInput = {
  coverId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  institution?: InputMaybe<Scalars['String']['input']>;
  isMediaHave?: InputMaybe<Scalars['Boolean']['input']>;
  isSkillHave?: InputMaybe<Scalars['Boolean']['input']>;
  logoId?: InputMaybe<Scalars['String']['input']>;
  motto?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFeedInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateGradeInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  percentage?: InputMaybe<Scalars['Int']['input']>;
  pointGroup?: InputMaybe<Scalars['Int']['input']>;
  pointHouse?: InputMaybe<Scalars['Int']['input']>;
  pointSingle?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateJudgeInput = {
  id: Scalars['Int']['input'];
  judgeName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  programmeCode?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePositionInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  pointGroup?: InputMaybe<Scalars['Int']['input']>;
  pointHouse?: InputMaybe<Scalars['Int']['input']>;
  pointSingle?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateProgrammeInput = {
  candidateCount?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  conceptNote?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  groupCount?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  mode?: InputMaybe<Mode>;
  name?: InputMaybe<Scalars['String']['input']>;
  programCode?: InputMaybe<Scalars['String']['input']>;
  skill?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Type>;
  venue?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSectionInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSkillInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSubstituteInput = {
  id: Scalars['Int']['input'];
  newCandidate?: InputMaybe<Scalars['Int']['input']>;
  oldCandidate?: InputMaybe<Scalars['Int']['input']>;
  programme?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTeamInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
};

export type ArrayInput = {
  inputs: Array<AddResult>;
};

export type CreateInput = {
  inputs: Array<CreateProgrammeInput>;
};

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id?: number | null, name?: string | null, updatedAt?: any | null }> };

export type GetOneCategoryQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOneCategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', id?: number | null, name?: string | null, updatedAt?: any | null, section?: { __typename?: 'Section', id?: number | null, name?: string | null } | null } };

export type AddCategoryMutationVariables = Exact<{
  name: Scalars['String']['input'];
  section: Scalars['String']['input'];
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'Category', id?: number | null, name?: string | null, section?: { __typename?: 'Section', name?: string | null } | null } };

export type EditCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  section: Scalars['String']['input'];
}>;


export type EditCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'Category', id?: number | null, name?: string | null, section?: { __typename?: 'Section', name?: string | null } | null } };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', removeCategory: { __typename?: 'Category', id?: number | null, name?: string | null } };

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginType', token: string, admin: { __typename?: 'Credential', username?: string | null, id?: number | null, roles?: Roles | null, categories?: Array<{ __typename?: 'Category', id?: number | null, name?: string | null }> | null, team?: { __typename?: 'Team', id?: number | null, name?: string | null } | null } } };

export type CheckLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckLoggedInQuery = { __typename?: 'Query', checkLoggedIn: { __typename?: 'Credential', username?: string | null, id?: number | null, roles?: Roles | null, categories?: Array<{ __typename?: 'Category', id?: number | null, name?: string | null }> | null, team?: { __typename?: 'Team', id?: number | null, name?: string | null } | null } };

export type GetAdminsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminsQuery = { __typename?: 'Query', sections: Array<{ __typename?: 'Section', id?: number | null, name?: string | null }> };


export const GetAllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetOneCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetOneCategoryQuery, GetOneCategoryQueryVariables>;
export const AddCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"section"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCategoryInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"section"},"value":{"kind":"Variable","name":{"kind":"Name","value":"section"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AddCategoryMutation, AddCategoryMutationVariables>;
export const EditCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"section"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCategoryInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"section"},"value":{"kind":"Variable","name":{"kind":"Name","value":"section"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"section"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<EditCategoryMutation, EditCategoryMutationVariables>;
export const DeleteCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const CheckLoggedInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckLoggedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkLoggedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CheckLoggedInQuery, CheckLoggedInQueryVariables>;
export const GetAdminsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdmins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAdminsQuery, GetAdminsQueryVariables>;