"use client";

import { getCurrentUser } from 'aws-amplify/auth';
//import { Amplify } from 'aws-amplify';
//import outputs from '@/amplify_outputs.json';

//Amplify.configure(outputs);

export const checkUserAuthentication = async () => {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    return userId ? true : false;
  } catch (error) {
    return false;
  }
};