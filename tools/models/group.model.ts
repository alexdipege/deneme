import{AuditModel} from './audit.dto';
import{ActivityTypeModel} from './activity-type.model';

export class ActivityModel{
    id:string;
    name:string;
    audit:AuditoModel;
    type:ActivityTypeModel; 
}