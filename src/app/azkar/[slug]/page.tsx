"use client";
import { Azkar_Obj } from "@/assets/Azkar-Json/Azkar";
import AZkarCard from "@/app/component/AZkarCard";
import { useParams } from "next/navigation";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
type azkarT = {
  category: string;
  count: string;
  description: string;
  reference: string;
  content: string;
};
const Page = () => {
  let parm = useParams();
  let slug = parm.slug;
  let az = Object.values(Azkar_Obj);
  let des = {
    "az-m": az[0],
    "az-e": az[1],
    "az-be": az[2],
    "az-tas": az[3],
    "az-sleep": az[4],
    "az-getup": az[5],
    "ad-q": az[6],
    "ad-n": az[7],
  };
  let getslug = (
    e: string | string[]
  ): [azkarT[] | undefined | null, string] => {
    let v = Object.values(des);
    let n = "";
    let a: azkarT[] | undefined | null = Object.keys(des)
      .map((s, i) => {
        if (s === e) {
          n = v[i][0].category;
          return v[i];
        } else {
          return null;
        }
      })
      .filter((d) => d !== null)[0];
    console.log(a);
    return [a, n];
  };
  let [azkar, name] = getslug(slug);
  console.log(azkar);
  return (
    <Container>
      <Row style={{ justifyContent: "center" }} className="mb-5">
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="text-center text-white mt-5"
          style={{
            fontFamily: "Reem Kufi , sans-serif",
            textShadow: "1px 2px #000000",
          }}>
          <h1>«« {name} »»</h1>
        </Col>
        {azkar?.map((e, i) => (
          <Col key={i} lg={11} md={11} className="mt-4">
            <AZkarCard
              refrance={e.reference}
              title={e.content}
              des={e.description}
              count={e.count}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Page;
