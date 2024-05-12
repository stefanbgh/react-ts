export interface ISupportMessage {
    userId: string;
    messageId: number;
    firstName: string;
  	email: string;
  	title: string;
  	message: string;
  	timestamp: number;
    changeTimestamp: number;
    answer: {
        adminName?: string;
        adminMessage?: string;
        adminMessageTimestamp?: number;
    },
    adminResponse: boolean;
    seen: boolean;
    
	
}