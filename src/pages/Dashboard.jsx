import React from "react";
import UsersTable, { mockData } from "../components/Table";
import {
  Autocomplete,
  Card,
  Center,
  Flex,
  Grid,
  Group,
  Loader,
  Text,
} from "@mantine/core";
import StatCard from "../components/StatCard";
import { IconSearch } from "@tabler/icons-react";

const Dashboard = () => {
  return (
    <Flex direction={"column"}>
      <Grid grow gutter={"md"}>
        <Grid.Col span={3}>
          <Center>
            <StatCard
              color={"#121212"}
              title={"test"}
              subtitle={"subtitle"}
              value={"123456"}
              isMoney={true}
            />
          </Center>
        </Grid.Col>
        <Grid.Col span={3}>
          <Center>
            <StatCard
              color={"#121212"}
              title={"test"}
              subtitle={"subtitle"}
              value={"123456"}
              isMoney={true}
            />
          </Center>
        </Grid.Col>
        <Grid.Col span={3}>
          <Center>
            <StatCard
              color={"#121212"}
              title={"test"}
              subtitle={"subtitle"}
              value={"123456"}
              isMoney={true}
            />
          </Center>
        </Grid.Col>
        <Grid.Col span={3}>
          <Center>
            <StatCard
              color={"#121212"}
              title={"test"}
              subtitle={"subtitle"}
              value={"123456"}
              isMoney={true}
            />
          </Center>
        </Grid.Col>
      </Grid>
      <Grid gutter={"md"}>
        <Grid.Col span={12}>
          <Card shadow="sm" withBorder sx={{ marginTop: 10 }}>
            <Card.Section p={20}>
              <Text weight={700} size={28}>
                Last Added packages
              </Text>
              <Group position="apart">
                <Text weight={300} size={16} color="#404040">
                  ID, Package Code, Shelves ...
                </Text>
                <Autocomplete
                  placeholder="Search"
                  // TODO: you can put here the names of the fetched products so the user can choose more easily
                  data={["test", "test"]}
                  icon={<IconSearch />}
                ></Autocomplete>
              </Group>
            </Card.Section>
            <Card.Section>
              <UsersTable data={mockData.data} />
            </Card.Section>
          </Card>
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default Dashboard;
