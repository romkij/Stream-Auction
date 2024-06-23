// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      isAuthorizedToDonationAlerts: boolean;
      hasUnseenUpdates: boolean | undefined;
    }
    // interface Platform {}
  }
}


export { };
