import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        account: {
            ID: '',
            Taikhoan: '',
            Email: '',
            HoTen: '',
            AnhDaiDien: '',
            token: '',
            Quyen_ID: '',
        },
        loggedIn: false,
    },
    reducers: {
        loginSuccess: (state, action) => {
            console.log('Action:', action);
            console.log('Payload:', action.payload);

            return {
                ...state,
                account: {
                    account: {
                        ID: action.payload ? action.payload.ID || '' : '',
                        TaiKhoan: action.payload ? action.payload.TaiKhoan || '' : '',
                        Email: action.payload ? action.payload.Email || '' : '',
                        HoTen: action.payload ? action.payload.Ten || '' : '',
                        Quyen_ID: action.payload ? action.payload.Quyen_ID || '' : ''
                    },
                },
                loggedIn: true
            };
        },
        logout: (state) => {
            return {
                ...state,
                loggedIn: false,
                account: {
                    ID: '',
                    Taikhoan: '',
                    Email: '',
                    HoTen: '',
                    AnhDaiDien: '',
                    token: '',
                    Quyen_ID: '',
                }
            };
        },

    },
    extraReducers: (builder) => {

    },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;

