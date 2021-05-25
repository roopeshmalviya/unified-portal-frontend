export class User {

    public userId: string;
    public firstName: string;
    public lastName: string;
    public username: string;
    public email: string;
    public recentLoginDate: Date;
    public recentLoginDateShow: Date;
    public joinDate: Date;
    public updateDate: Date;
    public roles: string; //ROLE_ADMIN, ROLE_USER
    public enabled: boolean; 
    public notLocked:boolean;   
    public permitions:[];


    constructor() {
        this.userId = '';
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.recentLoginDate= null;
        this.recentLoginDateShow= null;
        this.joinDate= null;
        this.updateDate= null;
        this.roles = ''; //ROLE_ADMIN, ROLE_USER
        this.enabled = false;
        this.notLocked = false;
        this.permitions=[];
    }

}
