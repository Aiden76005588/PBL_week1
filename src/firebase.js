import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// firebase 설정과 관련된 개인 정보
const firebaseConfig = {
  apiKey: "AIzaSyD66Cn93CGdRAxnCv1Rl1YZv7FHG1j1AsQ",
  authDomain: "pbl-week1-mymemo.firebaseapp.com",
  projectId: "pbl-week1-mymemo",
  storageBucket: "pbl-week1-mymemo.appspot.com",
  messagingSenderId: "122192109969",
  appId: "1:122192109969:web:3d464e3cbd5defa002fa30",
  measurementId: "G-QQ2CPW1DKS",
};

// firebaseconfig 정보로 firebase 시작
initializeApp(firebaseConfig);
// const app =initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { db };
