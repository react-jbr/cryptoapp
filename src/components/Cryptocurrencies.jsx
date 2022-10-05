import { Card, Row, Col, Input } from "antd";
import millify from "millify";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(10);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  console.log("cryptos", cryptos);
  return (
    <div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img className="crypto-image" src={currency.iconUrl}></img>
                }
                hoverable
              >
                <p> Price : {millify(currency.price)} </p>
                <p> Market Cap : {millify(currency.marketCap)} </p>
                <p> Daily Change : {millify(currency.price)} </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cryptocurrencies;
