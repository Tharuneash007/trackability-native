export const initialState = {
  settingGroupGoal: [{ groupName: null, name: null, email: null }],
  userDetails: [],
  userEmail: null,
  influencerGoalAreaData: {},
  achieverGoalAreaData: {},
  goalId: null,
  roleId: null,
  sharegoalId: null,
  goalSummaryData: {
    dummyData: "",
    goalPriority: "",
    goalTitle: "",
    goalArea: "",
    goalAreaList: false,
    goalSubTypeList: "",
    chooseGoalArea: "",
    enterGoalArea: "",
    goalFor: "",
    goalSelectedSubType: "",
    groupName: "",
    name: "",
    email: "",
    goalType: "",
    recurring: "",
    startDate: null,
    targetDate: null,
    goalDescription: "",
    goalSelectedSubOption: "",
  },
  goalDialogueOptionsForInfluencer: [],
  roleName: "",
  userCurrentPage: "",
  forgotPassword: [],
  showNdisAgreement: false,
  showTermsNConditions: false,
  ndisAgreementSigned: false,
  ndisTCSigned: false,
  showConflictOfInterest: false,
  showConfirmationDialog: {show: false, text: '', onOkClick: ''}
};
