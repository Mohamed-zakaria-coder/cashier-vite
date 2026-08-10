import { useEffect, useState } from "react";
import { FaMoneyBillWave, FaShoppingCart, FaPizzaSlice } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ revenue: 0, orders: 0, items: 0, average: 0 });
  useEffect(() => {
    const sales = JSON.parse(localStorage.getItem("bills") || "[]");
    const today = new Date().toLocaleDateString();
    const todaySales = sales.filter((sale) => new Date(sale.date).toLocaleDateString() === today);
    const revenue = todaySales.reduce((sum, sale) => sum + sale.products.reduce((total, product) => total + Number(product.total), 0), 0);
    const items = todaySales.reduce((sum, sale) => sum + sale.products.reduce((total, product) => total + Number(product.quantity), 0), 0);
    setStats({ revenue, orders: todaySales.length, items, average: todaySales.length ? revenue / todaySales.length : 0 });
  }, []);
  const metrics = [{ label: "Today’s revenue", value: `${stats.revenue.toFixed(2)}$`, icon: FaMoneyBillWave }, { label: "Orders today", value: stats.orders, icon: FaShoppingCart }, { label: "Items sold", value: stats.items, icon: FaPizzaSlice }, { label: "Average order", value: `${stats.average.toFixed(2)}$`, icon: IoStatsChart }];
  const actions = [{ label: "New order", path: "/", icon: FaPizzaSlice }, { label: "View sales", path: "/Sales", icon: IoStatsChart }, { label: "Analytics", path: "/Stats", icon: ImStatsDots }];
  return <main className="dashboard-page"><header className="page-header"><div><p className="section-kicker">Overview</p><h1 className="section-title">Dashboard</h1><p>Your daily performance at a glance.</p></div><div className="header-date">{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</div></header><section className="metric-grid">{metrics.map(({ label, value, icon: Icon }) => <div className="metric-card" key={label}><Icon className="metric-icon" /><div className="metric-label">{label}</div><div className="metric-value">{value}</div></div>)}</section><section className="panel"><h2>Quick actions</h2><div className="quick-grid">{actions.map(({ label, path, icon: Icon }) => <button className="quick-action" key={label} onClick={() => navigate(path)}><Icon className="metric-icon" />{label}</button>)}</div></section><section className="dashboard-grid" style={{ marginTop: 16 }}><div className="panel"><h2>Today’s activity</h2>{stats.orders ? <div className="activity-list"><div className="activity-row"><div><p>{stats.orders} completed {stats.orders === 1 ? "order" : "orders"}</p><small>Recorded in local sales history</small></div><strong>{stats.revenue.toFixed(2)}$</strong></div></div> : <div className="empty-state">No orders recorded today.</div>}</div><div className="panel"><h2>Daily targets</h2><div className="activity-list"><div className="activity-row"><div><p>Revenue target</p><small>{stats.revenue.toFixed(2)}$ of 800$</small></div><strong>{Math.min(100, Math.round(stats.revenue / 8))}%</strong></div><div className="activity-row"><div><p>Order target</p><small>{stats.orders} of 50 orders</small></div><strong>{Math.min(100, Math.round(stats.orders * 2))}%</strong></div></div></div></section></main>;
};
export default Dashboard;
