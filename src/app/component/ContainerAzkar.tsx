import { Azkar_Obj } from "@/assets/Azkar-Json/Azkar";
import React from "react";
import { Col, Row } from "react-bootstrap";
import AZCard from "./AZCard";

const ContainerAzkar = () => {
  let az = Object.keys(Azkar_Obj);
  let des = [
    { lg: 6, title: az[0], id: "az-m" },
    { lg: 6, title: az[1], id: "az-e" },
    { lg: 8, title: az[2], id: "az-be" },
    { lg: 4, title: az[3], id: "az-tas" },
    { lg: 6, title: az[4], id: "az-sleep" },
    { lg: 6, title: az[5], id: "az-getup" },
    { lg: 6, title: az[6], id: "ad-q" },
    { lg: 6, title: az[7], id: "ad-n" },
  ];
  return (
    <Row style={{ justifyContent: "space-evenly" }} className="ps-3 pe-3">
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
        <h1>«« {"الأذكار"} »»</h1>
      </Col>

      {des.slice(0, 6).map((e, i) => {
        return (
          <Col key={i} lg={e.lg} md={e.lg}>
            <AZCard title={e.title} id={e.id} />
          </Col>
        );
      })}
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="text-center text-white"
        style={{
          fontFamily: "Reem Kufi , sans-serif",
          textShadow: "1px 2px #000000",
        }}>
        <h1>«« {"الأدعية"} »»</h1>
      </Col>
      {des.slice(-2).map((e, i) => {
        return (
          <Col key={i} lg={e.lg} md={e.lg}>
            <AZCard title={e.title} id={e.id} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ContainerAzkar;
