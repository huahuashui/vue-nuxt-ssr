export interface GetUserInfoData {
  //用户id
  id: string; 
  //手机号码
  mobile?: string;
  //用户昵称
  nickName: string;
  //用户头像
  photoPicURL: string;
  //	更新时间
  updateTime?: Date;
  //性别(M:男, F:女)
  gender?:	string;
  //生日	
  birthday?: Date;
  //省
  prov?: string;
  //	城市
  city?: string;
  //血型
  blood?:	string;
  //学历
  edu?: string;
  //邮箱
  email?:	string;
  //实名验证flag:"y":已验证,"a":待验证
  cflag?:	string;	
  //	是否已认证 0-未认证,1-已认证
  isAuth?: number;
  //	用户类型 1普通，2个人，3机构
  userTypeId?: number;
  //用户等级ID
  userLevelId?: number;	
  //是否提示绑定 0-未提示 1-已提示
  isHintBind?: number;
}