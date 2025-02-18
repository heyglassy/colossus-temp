import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import styled, { css } from "styled-components";
import { BlockContainer, Flex, ScrollContainer } from "./styled.jsx";
import Arrow from "../static/down.svg";
import Lock from "../static/Lock.png";
import Guidance from "../static/Guidance.svg";
import Community from "../static/Community.svg";
import Tangibility from "../static/Tangibility.svg";
import LogoGroup from "../static/LogoGroup.svg";
import Signatures from "./containers/Signatures.jsx";

export default function Home() {
  return (
    <Main>
      <hr />
      <Title>A worldwide education platform for the self-motivated.</Title>
      <Description>
        <Image src={LogoGroup}></Image>
        <Mono description ml="10px">
          / Jul 12, 2022
        </Mono>
      </Description>
      <hr />
      <Paragraph>
        <Highlight>The next generation of builders is self-taught, and already building the future, right now.</Highlight> Most began online, watching Youtube
        videos, building web apps, reading articles, joining professional communities, shipping products, while underserved by institutional education.
      </Paragraph>
      <Paragraph>
        The paradigm of building companies in garages is over, replaced by founding companies remotely, coordinating global teams, watching Youtube videos to
        learn on the fly, and building products at light-speed, all while still in high school.
      </Paragraph>
      <Paragraph>
        We’re about to see the number of incredible <Highlight>young builders exponentially increasing over the next decade</Highlight>. But the vast majority
        will continue to be underserved and unguided — self-teaching is difficult. It’s time to treat self-paced, self-motivated education as the true
        alternative it is, and build the infrastructure students need.
      </Paragraph>
      <QuoteBox>
        <VerticalLine />
        <Paragraph marginless>
          The Human Colossus is a global collective of builders set on building a better educational system for young people, and get them competing for,
          contributing to, and founding the future.
        </Paragraph>
      </QuoteBox>
      <Paragraph>
        <Highlight>Our founding members have all been a part of the first wave</Highlight>, as members of early Discord communities, Twitter groups, and online
        accelerators. We’re inspired by our experiences on platforms like Pioneer, communities like the Gen Z Mafia, and the young builder networks on Twitter,
        to build something better.
      </Paragraph>
      <hr />
      <Paragraph>To understand our approach, we must answer: </Paragraph>
      <Flex>
        <VerticalLine />
        <Quote>Why is it so difficult to get started?</Quote>
      </Flex>
      <Paragraph>
        It’s not for lack of effort. It’s not for lack of time. It’s not for lack of free learning resources. Instead, there are three major reasons why young
        people have struggle gaining momentum:
      </Paragraph>
      <Heading>Guidance</Heading>
      <Paragraph>🚨 It’s hard to know where/how to start.</Paragraph>
      <Paragraph>🚨 It’s hard to not get stuck or lost along the way.</Paragraph>
      <Paragraph>🚨 It’s hard to stay on track and maintain long-term vision for what you’re doing.</Paragraph>
      <Paragraph>
        It’s easy to forget <Highlight>how easy it is to get stuck when you’re young</Highlight>; knowing where to find answers to questions, finding
        alternatives, or overcoming obstacles is a skill that develops with age.
      </Paragraph>
      <Paragraph>
        Young people need a lot of help, which we can provide in broken-down guides, direction from mentors, and the space to continuously expand into
        increasingly ambitious endeavors.
      </Paragraph>
      <Paragraph>
        Most importantly, <Highlight>we don’t need to create new educational content</Highlight>, just direction on where to find existing resources. We don’t
        need to supplement the countless courses, videos, textbooks, and articles already out there, for free!
      </Paragraph>
      <Paragraph>
        The minority of content produced by Colossus members will be what they would have created already, in the form project releases and articles, modified
        to fit the platform (steps for replication, learning pre-requisites, etc.).
      </Paragraph>
      <Paragraph>
        👉 &nbsp; We’re providing guides that truly go from 0 → 1, from “hello world” to compiler, written by successful builders in the space.
      </Paragraph>
      <Paragraph>
        👉 &nbsp; We’re providing guidance by connecting those just starting with older, more tenured builders, creating role models and mentors in the process.
      </Paragraph>
      <Paragraph>
        👉 &nbsp; We’re re-formatting projects and organizations built by Colossus members into replicable projects, with stepped guides to replicate whatever
        one finds exciting.
      </Paragraph>
      <ImageBlock>
        <Image large src={Guidance}></Image>
      </ImageBlock>
      <Heading>Tangibility</Heading>
      <Paragraph>🚨 It’s hard if learning has little or infrequent real-world, hands-on application. </Paragraph>
      <Paragraph>🚨 It’s hard if there isn't a strong reason "why" one is learning.</Paragraph>
      <Paragraph>
        It’s counterintuitive that resources, like KhanAcademy, MIT OpenCourseware, or Libgen, are{" "}
        <Highlight>not often cited by builders as paths for self-learning</Highlight>, given that they provide limitless, free, world-class education.
      </Paragraph>
      <Paragraph>Why is this? Tangibility. </Paragraph>
      <Paragraph>
        This is easy to see if we take a look at non-digital, advanced subjects. Naturally, contribution and acknowledgement in high-depth subjects is very
        discrete: there is little contribution that a high schooler can progressively create in the field of mathematics.
      </Paragraph>
      <Paragraph>
        As a result, studying high-depth topics can be incredibly difficult, as progress can feel useless and intangible.{" "}
        <Highlight>Most people aren’t capable of self-studying math for years in hope of a distant payoff</Highlight>, especially since institutional education
        will not recognize it.
      </Paragraph>
      <Paragraph>
        This outlines tangibility, which is akin to <Highlight>changing learning from climbing a cliff into walking up stairs</Highlight>, where reward can be
        found at each step.
      </Paragraph>
      <Paragraph>
        In software, this is common: students begin with building a personal website, feel proud of their creation, then iterate.{" "}
        <Highlight>Contribution, creation, and impact can be created within hours</Highlight>: results are tangible, not abstract.
      </Paragraph>
      <Paragraph>Whether it’s web development, biology, or climate research, we can make progression more tangible.</Paragraph>
      <Paragraph>
        👉 &nbsp; We’re building a leveling system that allows us to reward intermediate progress (see KhanAcademy), paired with social incentives.
      </Paragraph>
      <Paragraph>
        👉 &nbsp; We’re rewarding users who follow the two-week learn, teach, publish pattern, where writing out learnings to teach others allows a form of
        direct application + tangible value to the world.{" "}
      </Paragraph>
      <Paragraph>
        👉 &nbsp; We’re deeply integrating users with a community of peers, allowing them to compete and progress relatively in their community, without
        justifying to the greater world.
      </Paragraph>
      <ImageBlock>
        <Image large src={Tangibility}></Image>
      </ImageBlock>
      <Heading>Community</Heading>
      <Paragraph>🚨 It’s hard if you don’t have any assistance in your learning.</Paragraph>{" "}
      <Paragraph>🚨 It’s hard when you’re only competing against yourself and working alone. </Paragraph>
      <Paragraph>🚨 It’s hard if you can’t share your work with others.</Paragraph>
      <Paragraph>
        Communities can be a place for support and guidance, where students can find role models to aspire to and for peers to collaborate with.{" "}
        <Highlight>Every great builder cites a certain community that helped them along their way.</Highlight>
      </Paragraph>
      <Paragraph>
        A community of similarly-paced peers can offer the feedback, criticism, and appreciation to keep students moving. Through shared effort,
        inter-competition, and group contribution, learning becomes far more rewarding.{" "}
        <Highlight>Communities provide both guidance and tangibility.</Highlight>
      </Paragraph>
      <Paragraph>
        Still, building tight community can be difficult, fragile, and often unscalable. For this reason,{" "}
        <Highlight>the communities we directly create will look different</Highlight>
        than the Discord servers, Telegram chats, and Twitter groups many of us are familiar with. Scalability, permissionlessness, and stability are
        requirements.
      </Paragraph>
      <Paragraph>
        Our community structure looks far more like a forum, like Reddit or StackOverflow, with clustering users into sub-communities and progression-gated
        social spaces. <NoteInline>We are still conducting research in this area. Feel free to give feedback by tweeting at @jointhecolossus.</NoteInline>
      </Paragraph>
      <Paragraph>👉 &nbsp; We’re building a network of builders, from just starting to just raised a Series C, worldwide.</Paragraph>
      <Paragraph>
        👉 &nbsp; We’re automatically grouping similar users, allowing for collaboration, inter-competition, and sharing, without needing to directly compete
        with the world at large.
      </Paragraph>
      <Paragraph>
        👉 &nbsp; We’re constantly showcasing the incredible accomplishments of our members, reminding users of their potential and how similar they are to
        successful builders.
      </Paragraph>
      <ImageBlock>
        <Image large src={Community}></Image>
      </ImageBlock>
      <Heading>What does this look like?</Heading>
      <Paragraph>
        To start, we’ve built a platform for existing builders who are already creating & learning at high speed. You can meet some of our members below!
      </Paragraph>
      <Paragraph>
        We’re still finalizing design and beginning development mid-August. Following testing and a trial period with founding members, we’ll be releasing to
        builders on the waitlist. <NoteInline>You can sign up for the waitlist below.</NoteInline>
      </Paragraph>
      <Paragraph>
        We’re also actively recruiting founding members that can function as advisors, advocates, and early users. If you’d like to nominate someone, you can do
        so below.{" "}
        <NoteInline>
          We temporarily bias towards recruiting founding members who have already built high-impact projects or with existing reach in the space.
        </NoteInline>
      </Paragraph>
      <Flex space mb="20px">
        <Button
          onClick={() =>
            window.open(
              "mailto:team@colossus.fyi?subject=Nomination%20of...&body=%23%23%23%20Make%20sure%20to%20copy%20the%20nominee%20on%20this%20email!%20%23%23%23%0D%0A%0D%0AHi%2C%0D%0A%0D%0AI'm%20%5Bname%5D%20and%20am%20nominating%20my%20friend%20%5Bname%5D%20for%20Colossus.%0D%0A%0D%0AInfo%20about%20me%3A%0D%0A(name%2C%20two%20sentence%20description%2C%20Twitter%2Fother%20social%2C%20personal%20website)%0D%0A%0D%0AInfo%20about%20the%20nominee%3A%0D%0A(name%2C%20email%2C%20two%20sentence%20description%2C%20Twitter%2Fother%20social%2C%20personal%20website)%0D%0A%0D%0AWhy%20should%20we%20consider%20the%20nominee%3F%20Why%20are%20they%20a%20good%20advocate%2C%20advisor%2C%20and%20community%20member%3F%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A"
            )
          }
        >
          Nominate a friend
        </Button>
        <Button dark onClick={() => window.open("https://www.getwaitlist.com/waitlist/3960")}>
          Join waitlist
        </Button>
        <Button dark onClick={() => window.open("mailto:contact@colossus.fyi?subject=Reaching%20out...")}>
          Contact us
        </Button>
      </Flex>
      <br />
      <Signatures />
      <BlockContainer title="Get involved!">
        <Flex gap>
          <Button dark small onClick={() => window.open("https://twitter.com/jointhecolossus")}>
            Follow on Twitter
          </Button>
          <Button dark small>
            Text COLOSSUS to 1 833 225 6887
          </Button>
        </Flex>
      </BlockContainer>
      <Paragraph note style={{ marginTop: "80px" }}>
        <b>Diversity, Equity, and Inclusion: </b>
        <br />
        The online learning revolution is global and indiscriminatory of gender, race, or origin. The Human Colossus is an inherently diverse organization and
        aims to represent all builders of all backgrounds. We recognize the STEM gender gap and are committed to fighting for better gender representation in
        our organization and the space at large.
      </Paragraph>
    </Main>
  );
}

const NoteInline = styled.span`
  color: #747485;
  font-style: italic;
`;

// test
const Main = styled.body`
  max-width: 550px;
  margin: 0 auto;
  padding: 0px;
  margin-top: 32px;
  height: 100%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;
  gap: 5.28px;

  min-width: 100px;
  height: 40px;

  background: #5f4bdd;
  border-radius: 5.28498px;

  font-family: "Button", monospace;
  font-size: 15px;
  font-weight: bold;
  color: white;

  cursor: pointer;

  ${({ dark }) =>
    dark &&
    css`
      background: #191933;
    `}

  ${({ small }) =>
    small &&
    css`
      padding: 0px 20px;
      font-size: 14px;
    `}
`;

const Title = styled.h1`
  font-family: "Body";
  color: #fff;
`;

const Image = styled.img`
  ${({ large }) =>
    large &&
    css`
      margin-bottom: 20px;
    `}
`;

const ImageBlock = styled(Flex)`
  justify-content: center;
`;

const Description = styled(Flex)`
  justify-content: left;
  align-items: bottom;
  gap: 10px;
  margin: 20px 0px;
`;

const Highlight = styled.span`
  // font-weight: bold;
  background: #30267c;
`;

const Paragraph = styled.p`
  font-family: "Body";
  color: #e9e9ec;
  font-weight: normal;

  ${({ note }) =>
    note &&
    css`
      color: #747485;
      font-family: "Mono";
      font-size: 13px;
      font-style: italic;
      padding: 10px;
    `}

  ${({ marginless }) =>
    marginless &&
    css`
      margin: 0px;
    `}
`;

const Mono = styled.p`
  color: #747485;
  font-family: "Mono";

  ${({ description }) =>
    description &&
    css`
      margin: 0px;
      font-size: 14px;
      padding-top: 2px;
    `}
`;

const Heading = styled.h2`
  font-family: "Body";
  color: #e9e9ec;
`;

const QuoteBox = styled(Flex)`
  gap: 15px;
`;

const Quote = styled.h3`
  font-family: "Body";
  color: #e9e9ec;
  margin: 0;
  margin-left: 15px;
`;

const VerticalLine = styled.div`
  width: 1px;
  background-color: #ffffff;
  display: flex;
  min-height: 20px;
`;
