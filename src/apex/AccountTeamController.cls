public class AccountTeamController {
  @AuraEnabled(cachable=true)
  public static List<AccountAlert> getTeamMembers(Id accountId) {
    return [SELECT Id, TeamMemberRole,UserId, user.name, SplitPercentage__c from AccountTeamMember where AccountId = :accId
                 AND TeamMemberRole IN : OPPORTUNITY_TEAM_ROLES];
  }
}
