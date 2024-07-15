<template>
    <ul class="login-social">
        <!-- <li><a href="#" class="bg-fb"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#" class="bg-twitter"><i class="fab fa-twitter"></i></a></li> -->
        <li><a href="#" class="bg-gplus" @click="signInWithGoogle"><i class="fab fa-google-plus-g"></i></a></li>
        <!-- <li><a href="#" class="bg-git"><i class="fab fa-github"></i></a></li> -->
    </ul>
</template>
  
  <script setup>
  import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { getAdditionalUserInfo } from "firebase/auth";
  import { doc, setDoc } from "firebase/firestore";
  const { auth, db } = useFirebase();
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(async (result) => {
      const isNewUser = getAdditionalUserInfo(result)?.isNewUser;
      const { email, displayName, uid } = result.user;
  
      if (isNewUser) {
        await setDoc(doc(db, "users", uid), { email, displayName });
      }
    });
  };
  </script>
  