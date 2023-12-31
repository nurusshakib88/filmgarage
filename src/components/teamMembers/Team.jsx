import React from "react";
import "./Team.scss";
import { Col } from "react-bootstrap";

const Team = ({ m_pic, m_name, m_service }) => {
  return (
    <Col xl={3} md={4}>
      <div className="team">
        <div className="profile_pic">
          <img src={m_pic} alt="filmgarage" />
        </div>

        <div className="member_name">{m_name}</div>

        <div className="m_service">{m_service}</div>
      </div>
    </Col>
  );
};

export default Team;
