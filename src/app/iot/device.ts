export class Device {
  id: number;
  parentId: number;
  fullId: string;
  name: string;
  identifier: string;
  customer: string;
  ruleNote: string;
  ruleCondition: string;
  description: string;
  enabled: boolean;
  automatic: boolean;
  status: number;
  lastRecordTime: number;
  recordTimeLimit: number;
  deviceTypeId: number;
  creator: number;
  tempId: string;
  deleted: boolean;
}
