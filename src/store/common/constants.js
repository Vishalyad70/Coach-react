const BASE_URL = "https://mmfinfotech.co/Elevate_her_project/api";
const AUTHORIZATION = "Authorization";
const COOKIE_EXPIRED = 60 * 60 * 24 * 365;
const APIs = {
    ADMIN_LOGIN: "/admin/login",
    FORGOT_PASSWORD: "/admin/forgetPassword",
    CHANGE_PASSWORD: "/admin/changePassword",
    GET_DASHBOARD_COUNT: "/admin/numberofusers",
    GET_NUMBER_OF_APPOINTMENTS: "/admin/numberofAppointment",
    GET_PAY_USER_LIST: "/admin/getPayUserList",
    GET_ALL_USER_LIST: "/admin/userList",
    GET_ALL_COACH_LIST: "/admin/coachList",
    GET_USER_DETAIL: "/admin/userDetails",
    GET_COACH_DETAIL: "/admin/coachDetails",
    ADMIN_LOGOUT: "/admin/logout",
};

const MESSAGES = {};

const SUCCESS_TITLE = {
    SUCCESS: "Success",
};
const ERROR_TITLE = {
    FAILED: "Failed",
    FAILED_LOGIN: "Failed to Login.",
};
const DASHBOARD_COUNTS = [{
        id: 1,
        dataKey: "totalUsers",
        title: "Total no. of users",
        link: "",
        icon: "/images/users.svg",
    },
    {
        id: 2,
        dataKey: "totalCoaches",
        title: "Total no. of coaches",
        link: "",
        icon: "/images/coach.svg",
    },
    {
        id: 2,
        dataKey: "totalAppoinments",
        title: "Total no. of appoinments",
        link: "",
        icon: "/images/appoinment.svg",
    },
];

export {
    BASE_URL,
    COOKIE_EXPIRED,
    MESSAGES,
    APIs,
    SUCCESS_TITLE,
    ERROR_TITLE,
    AUTHORIZATION,
    DASHBOARD_COUNTS,
};