import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {useRecoilValue, useSetRecoilState } from "recoil";
import { dataAtom, loading } from "../store/atoms/questions";
import { categoryAtom, difficultyAtom, numOfQueAtom, questionsTypeAtom } from "../store/atoms/selection";

export function useQuestion() {
  const category = useRecoilValue(categoryAtom);
  const numOfQuestion = useRecoilValue(numOfQueAtom);
  const difficulty = useRecoilValue(difficultyAtom);
  const questionType = useRecoilValue(questionsTypeAtom);
  const setData= useSetRecoilState(dataAtom);
  const setLoading = useSetRecoilState(loading);
  const [apiUrl, setApiUrl] = useState('')

  useEffect(() => {
    const newApiUrl = `https://opentdb.com/api.php?amount=${numOfQuestion}&category=${category}&difficulty=${difficulty}&type=${questionType}&encode=url3986`
    setApiUrl(newApiUrl);
  }, [category, numOfQuestion, difficulty, questionType])

  const getQuestions = useCallback(async() => {
    try {
      setLoading(true);
      const response = await axios.get(apiUrl);
      setData(response.data.results || []);
    } catch(err) {
      console.error("Error fetching questions:", err);
      throw err;
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line
  },[apiUrl, setData]);

  return { getQuestions, loading };
}