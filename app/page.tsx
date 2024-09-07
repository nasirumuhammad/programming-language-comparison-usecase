"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <>
      <Tabs defaultValue="speed" className="mt-5 capitalize">
        <TabsList className="w-full gap-5">
          <TabsTrigger value="speed">speed</TabsTrigger>
          <TabsTrigger value="memory">memory</TabsTrigger>
          <TabsTrigger value="database">database connectivity</TabsTrigger>
        </TabsList>
        <TabsContent value="speed">
          <Card className="p-5 flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center">speed comparison</CardTitle>
            </CardHeader>
            <div className="content">
              <h1>C#</h1>
              <Progress value={91} />
            </div>
            <div className="content">
              <h1>JAVA</h1>
              <Progress value={33} />
            </div>
            <div className="content">
              <h1>PYTHON</h1>
              <Progress value={70} />
            </div>
            <CardFooter className="text-left p-0 m-0">time measured in miliseconds</CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="memory">
          <Card className="p-5 flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center">memory consumption comparison</CardTitle>
            </CardHeader>
            <div className="content">
              <h1>C#</h1>
              <Progress value={98} />
            </div>
            <div className="content">
              <h1>JAVA</h1>
              <Progress value={19} />
            </div>
            <div className="content">
              <h1>PYTHON</h1>
              <Progress value={50} />
            </div>
            <CardFooter className="text-left p-0 m-0">space measured in kilobytes</CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="database">
          <Card className="p-5 flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-center">database connectivity comparison</CardTitle>
            </CardHeader>
            <div className="content">
              <h1>C#</h1>
              <Progress value={85} />
            </div>
            <div className="content">
              <h1>JAVA</h1>
              <Progress value={13} />
            </div>
            <div className="content">
              <h1>PYTHON</h1>
              <Progress value={58} />
            </div>
            <CardFooter className="text-left p-0 m-0">time measured in miliseconds</CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
