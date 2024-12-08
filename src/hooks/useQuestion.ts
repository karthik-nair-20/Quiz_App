import { useCallback } from "react";
import axios from "axios";
import {useSetRecoilState } from "recoil";
import { dataAtom } from "../store/atoms/questions";


const apiUrl =
"https://opentdb.com/api.php?amount=10&category=30&difficulty=easy&type=multiple&encode=url3986";

export function useQuestion() {
  const setData= useSetRecoilState(dataAtom);
  const getQuestions = useCallback(async() => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data.results || []);
    } catch(err) {
      console.error("Error fetching questions:", err);
      throw err;
    }
  },[setData]);

  return { getQuestions };
}