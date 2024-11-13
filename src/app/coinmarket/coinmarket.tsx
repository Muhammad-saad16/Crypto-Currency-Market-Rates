"use client";
import { useState, useEffect } from "react";

interface Rates {
  BTC: number;
  BNB: number;
  ETH: number;
  LTC: number;
  XRP: number;
  DOGE: number;
  USDT: number;
  BCH: number;
  XLM: number;
  ADA: number;
  SOL: number;
}

interface ApiResponse {
  rates: Rates;
}

export default function CoinMarket() {
  const API_KEY = "e1300c22800059c0c920c87cf00bf51e";
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted: ApiResponse) => {
        console.log("JSON Converted Data:", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <div>
     <h1>Crypto Currency Market Rates</h1>
     <table className="table">
      <thead>
        <tr>
          <th>Crypto Currency</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BTC</td>
          <td>{data?.rates?.BTC}</td>
        </tr>
        <tr>
          <td>BNB</td>
          <td>{data?.rates?.BNB}</td>
        </tr>
        <tr>
          <td>ETH</td>
          <td>{data?.rates?.ETH}</td>
        </tr>
        <tr>
          <td>LTC</td>
          <td>{data?.rates?.LTC}</td>
        </tr>
        <tr>
          <td>XRP</td>
          <td>{data?.rates?.XRP}</td>
        </tr>
        <tr>
          <td>DOGE</td>
          <td>{data?.rates?.DOGE}</td>
        </tr>
        <tr>
          <td>USDT</td>
          <td>{data?.rates?.USDT}</td>
        </tr>
        <tr>
          <td>BCH</td>
          <td>{data?.rates?.BCH}</td>
        </tr>
        <tr>
          <td>XLM</td>
          <td>{data?.rates?.XLM}</td>
        </tr>
        <tr>
          <td>ADA</td>
          <td>{data?.rates?.ADA}</td>
        </tr>
        <tr>
          <td>SOL</td>
          <td>{data?.rates?.SOL}</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}