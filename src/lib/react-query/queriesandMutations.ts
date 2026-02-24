import { INewUser } from "@/types";
import { useQueries, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { createUserAccount, signInAccount, signOutAccount } from "../appwrite/api";


// mutate function number 1
export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user) 
    })
}



// mutate function number 2
export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: {email: string, password: string}) => signInAccount(user),
    })
}




export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount
    })
}





