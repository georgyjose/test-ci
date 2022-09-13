// import { MoengageProfile } from './model';

declare global {
    interface Window {
        moe: any;
        Moengage: any;
    }
}

export function initializeMoengage(accountId?: string, enableDebug?: string) {
    window.moe?.({
        app_id: accountId,
        debug_logs: enableDebug || 1,
    });
}

// export const updateMoengageProfile = async (userProfile:MoengageProfile) => {
//     let profile = userProfile;
//     if(!profile.Identity)
//         return;
//     const userStatus = await moengageUserStatusCheck(profile.Identity)
//     //Condition to avoid setting attributes call if it already set 
//     if(userStatus){
//         let userKey : keyof MoengageProfile;
//         window.Moengage?.add_unique_user_id(profile.Identity);
//         //Setting localstorage value top avoid multiple logins
//         localStorage.setItem('moengage_unique_id', `${profile.Identity}`)

//         window.Moengage?.add_first_name(profile.firstName||'');
//         delete profile.firstName;
//         window.Moengage?.add_last_name(profile.lastName||'');
//         delete profile.lastName;
//         window.Moengage?.add_email(profile.Email||'');
//         window.Moengage?.add_mobile(profile.registered_number);
//         window.Moengage?.add_user_name(profile.Name||''); // Full name for user
//         window.Moengage?.add_gender(profile.Gender||'');
//         window.Moengage?.add_birthday(profile.Birthday||'');

//         for(userKey in profile){
//             window.Moengage?.add_user_attribute(userKey, profile[userKey])
//         }
//     }
// };

const moengageUserStatusCheck = async (Identity: number) => {
    try {
        const moenageUniqueId = Number(localStorage.getItem('moengage_unique_id'))
        if (moenageUniqueId && Identity !== moenageUniqueId) {
            await logoutFromMoengage();
            return true;
        }
        else if (moenageUniqueId)
            return false;
        else
            return true;
    }
    catch (e) {
        console.log('Exception on moengage user logout')
        return true;
    }
}

export const logoutFromMoengage = async () => {
    try {
        await window.Moengage?.destroy_session();
        localStorage.removeItem('moengage_unique_id')
    }
    catch (e) {
        console.log('Exception on moengage user logout')
    }
}

export const sendMoengageEvent = (name: string, payload = {}) => {
    const finalPayload = {
        ...payload,
        Date: new Date().toISOString(),
        Source: window.location.hostname,
    }
    window.Moengage?.track_event?.(name, finalPayload)
};