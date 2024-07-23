<template>
    <div class="login-container">
        <div class="left-side">
            <!-- Mini formulaire -->
            <div class="login-form">
                <h2>Connexion</h2>
                <form >
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="formData.email" required>

                    <label for="password">Mot de passe</label>
                    <input type="password" id="password" v-model="formData.password" required>

                    <button type="submit" @click="signIn">Se connecter</button>
                </form>
            </div>
        </div>
        <div class="right-side">
            <!-- Image occupant tout l'espace -->
        </div>
    </div>
</template>

<script setup lang="ts">

import type { FormError, FormSubmitEvent } from "#ui/types";
import { useAuth } from "@vueuse/firebase";
import { getAdditionalUserInfo, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const { auth, db } = useFirebase();
const { isAuthenticated, user } = useAuth(auth);

const formData = reactive({
    email: '',
    password: ''
})

const signIn = () => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (result) => {
            // Signed up
            const isNewUser = getAdditionalUserInfo(result)?.isNewUser;

            if (isNewUser) {
                const { email, displayName, uid } = result.user;
                await setDoc(doc(db, "users", uid), { email, displayName });
            }
        })
}
</script>

<style scoped>
.login-container {
    display: flex;
    height: 100vh;
}

.left-side {
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right-side {
    flex: 1;
    position: relative;
    overflow: hidden;
}

.background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.login-form {
    max-width: 400px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.login-form form {
    display: flex;
    flex-direction: column;
}

.login-form label {
    margin-bottom: 5px;
}

.login-form input,
.login-form button {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-form button {
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}

.login-form button:hover {
    background-color: #45a049;
}
</style>