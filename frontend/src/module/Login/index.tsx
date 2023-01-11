import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useState } from "react";

import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Switch
} from "@mantine/core";
import { GiTeacher, GiWhiteBook } from "react-icons/gi";

export function AuthPage(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6 ? "Password should include at least 6 characters" : null
    }
  });

  const register = async () => {
    // try {
    //   const user = await createUserWithEmailAndPassword(
    //     auth,
    //     form.values.email,
    //     form.values.password
    //   );
    //   console.log("Create New User");
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const login = async () => {
    // try {
    //   const user = await signInWithEmailAndPassword(
    //     auth,
    //     form.values.email,
    //     form.values.password
    //   );
    //   console.log("Login");
    //   console.log(user);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const loginOrRegister = () => {
    // if (type == "login") {
    //   return login();
    // } else return register();
  };

  const logout = async () => {
    // await signOut(auth);
  };

  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%) scale(1.2)"
      }}
    >
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text
          size="lg"
          weight={500}
          sx={{ textAlign: "center", marginTop: "10px" }}
        >
          Welcome to Banana, {type}
        </Text>

        <Divider labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(loginOrRegister)}>
          <Stack>
            {type === "register" && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
              />
            )}

            {type === "register" && (
              <Switch
                labelPosition="left"
                size="sm"
                color="#2B788B"
                onLabel={<GiTeacher size={14} />}
                offLabel={<GiWhiteBook size={16} />}
                label="Are you teacher?"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="monkey@banana.split"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />

            {type === "register" && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                color="cyan"
                onChange={(event) =>
                  form.setFieldValue("terms", event.currentTarget.checked)
                }
              />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#2B788B",
                "&:hover": {
                  backgroundColor: "#07688A"
                }
              }}
            >
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
