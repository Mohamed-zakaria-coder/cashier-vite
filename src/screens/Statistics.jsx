import { useMemo } from "react";
import { Pie, Line } from "react-chartjs-2";
import "chart.js/auto";
import Data, { categories } from "../Data";

const Statistics = () => {
  const bills = JSON.parse(localStorage.getItem("bills") || "[]");
  const stats = useMemo(() => {
    const products = Data.map((product) => ({ ...product, quantity: 0, total: 0 }));
    const daily = {};
    bills.forEach((bill) => bill.products.forEach((line) => { const product = products.find((item) => item.id === line.product_id); if (product) { product.quantity += Number(line.quantity); product.total += Number(line.total); } const day = bill.date.slice(0, 10); daily[day] = (daily[day] || 0) + Number(line.total); }));
    const total = bills.reduce((sum, bill) => sum + bill.products.reduce((lineSum, line) => lineSum + Number(line.total), 0), 0);
    const monthKey = new Date().toISOString().slice(0, 7); const todayKey = new Date().toISOString().slice(0, 10);
    const month = Object.entries(daily).filter(([day]) => day.startsWith(monthKey)).reduce((sum, [, value]) => sum + value, 0);
    return { products, daily, total, month, today: daily[todayKey] || 0 };
  }, [bills.length]);
  const topQuantity = [...stats.products].sort((a, b) => b.quantity - a.quantity).slice(0, 5);
  const topTotal = [...stats.products].sort((a, b) => b.total - a.total).slice(0, 5);
  const categoryTotals = categories.map((category) => stats.products.filter((product) => product.category_id === category.id).reduce((sum, product) => sum + product.quantity, 0));
  const lineLabels = Object.keys(stats.daily); const lineValues = Object.values(stats.daily);
  return <main className="statistics-parent"><header className="page-header"><div><p className="section-kicker">Performance</p><h1 className="section-title">Statistics</h1><p>Understand what is selling and when.</p></div></header><section className="total-earnings-parent"><div className="total-earnings"><div>Total earnings</div><div>{stats.total.toFixed(2)}$</div></div><div className="total-earnings"><div>This month</div><div>{stats.month.toFixed(2)}$</div></div><div className="total-earnings"><div>Today</div><div>{stats.today.toFixed(2)}$</div></div></section><section className="stats-container"><div className="chart-panel"><h2>Sales by category</h2><div className="pie-chart"><Pie data={{ labels: categories.map((category) => category.name), datasets: [{ data: categoryTotals, backgroundColor: ["#f05a3c", "#182338", "#15966e", "#f5b942"] }] }} options={{ maintainAspectRatio: false }} /></div></div><div className="chart-panel"><h2>Daily earnings</h2><div className="line-chart"><Line data={{ labels: lineLabels, datasets: [{ label: "Earnings", data: lineValues, borderColor: "#f05a3c", backgroundColor: "#f05a3c22", fill: true, tension: .35 }] }} options={{ maintainAspectRatio: false }} /></div></div></section><section className="best-products-holder" style={{ marginTop: 16 }}><div className="best-quantity-container"><h2 className="best-popular-product">Most popular products</h2>{topQuantity.map((product) => <div className="best-quantity-parent" key={product.id}><img src={product.Image} className="best-quantity-img" alt={product.name} /><div className="best-total-quantity-name">{product.name}</div><div className="sold-units"><h3>Units sold</h3><strong className="top-total-quantity-products">{product.quantity}</strong></div></div>)}</div><div className="best-total-container"><h2 className="most-profitable-products">Top revenue products</h2>{topTotal.map((product) => <div className="best-total-parent" key={product.id}><img src={product.Image} className="best-total-img" alt={product.name} /><div className="best-total-quantity-name">{product.name}</div><div className="total-profit"><h3>Revenue</h3><strong className="top-total-quantity-products">{product.total.toFixed(2)}$</strong></div></div>)}</div></section></main>;
};
export default Statistics;
