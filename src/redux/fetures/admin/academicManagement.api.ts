
import { TQueryParam, TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { baseApi } from "../../api/baseApi";


const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // semester related apis..
        getAllSemesters: builder.query({
            query: (args) => {
                console.log(args);
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/academic-semesters',
                    method: 'GET',
                    params: params,
                };
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
        }),
        addAcademicSemester: builder.mutation({
            query: (data) => ({
                url: '/academic-semesters/create-academic-semester',
                method: 'POST',
                body: data,
            }),
        }),
        // Faculty related apis ..
        addAcademicFaculty: builder.mutation({
            query: (data) => ({
                url: '/academic-faculties/create-academic-faculty',
                method: 'POST',
                body: data,
            }),
        }),
        getAllFaculty: builder.query({
            query: (args) => {
                console.log(args);
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/academic-faculties',
                    method: 'GET',
                    params: params,
                };
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
        }),
        // Department related apis ..
        addAcademicDepartment: builder.mutation({
            query: (data) => ({
                url: '/academic-departments/create-academic-department',
                method: 'POST',
                body: data,
            }),
        }),
        getAllDepartment: builder.query({
            query: (args) => {
                console.log(args);
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/academic-departments',
                    method: 'GET',
                    params: params,
                };
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
        }),
        // hare is end
    }),
});

export const {
    useGetAllSemestersQuery,
    useAddAcademicSemesterMutation,
    useAddAcademicFacultyMutation,
    useGetAllFacultyQuery,
    useAddAcademicDepartmentMutation,
    useGetAllDepartmentQuery
} = academicManagementApi;