<template>
    <form @submit.prevent="login">
        <div class="mx-auto w-1/2">
            <div class="">
                <label for="email" class="label">Email(username)</label>
                <input
                    type="text"
                    id="email"
                    class="input"
                    v-model="form.email"
                />
                <div v-if="form.errors.email" class="input-error">
                    {{ form.errors.email }}
                </div>
            </div>
            <div class="mt-4">
                <label for="password" class="label">Password</label>
                <input
                    type="password"
                    id="password"
                    class="input"
                    v-model="form.password"
                />
                <div v-if="form.errors.password" class="input-error">
                    {{ form.errors.password }}
                </div>
            </div>
            <div class="mt-4">
                <button class="btn-primary w-full" type="submit">Login</button>
                <div class="mt-2 text-center">
                    <Link
                        :href="route('user-account.create')"
                        class="text-sm text-gray-500"
                        >Need an account Click Here
                    </Link>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { useForm, Link } from "@inertiajs/inertia-vue3";

const form = useForm({
    email: null,
    password: null,
});

const login = () => form.post(route("login.store"));
</script>
