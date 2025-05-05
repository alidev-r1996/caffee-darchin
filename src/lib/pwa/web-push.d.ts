declare module 'web-push' {
    export function setVapidDetails(email: string, publicKey: string, privateKey: string): void;
  
    export function sendNotification(
      subscription: PushSubscription,
      payload?: string,
      options?: {
        TTL?: number;
        vapidDetails?: {
          subject: string;
          publicKey: string;
          privateKey: string;
        };
        headers?: Record<string, string>;
      }
    ): Promise<any>;
  
    export interface PushSubscription {
      endpoint: string;
      expirationTime?: number | null;
      keys: {
        p256dh: string;
        auth: string;
      };
    }
  }
  