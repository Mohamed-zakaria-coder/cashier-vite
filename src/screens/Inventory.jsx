
import { useState } from "react"
import { FaBox, FaExclamationTriangle, FaCheckCircle, FaPlus } from "react-icons/fa"
import { MdEdit } from "react-icons/md"



const Inventory = () => {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Pizza Dough",
      category: "Base",
      currentStock: 45,
      minStock: 20,
      unit: "kg",
      lastRestocked: "2024-01-15",
    },
    {
      id: 2,
      name: "Mozzarella Cheese",
      category: "Cheese",
      currentStock: 12,
      minStock: 15,
      unit: "kg",
      lastRestocked: "2024-01-14",
    },
    {
      id: 3,
      name: "Tomato Sauce",
      category: "Sauce",
      currentStock: 8,
      minStock: 10,
      unit: "liters",
      lastRestocked: "2024-01-13",
    },
    {
      id: 4,
      name: "Pepperoni",
      category: "Meat",
      currentStock: 25,
      minStock: 10,
      unit: "kg",
      lastRestocked: "2024-01-15",
    },
    {
      id: 5,
      name: "Mushrooms",
      category: "Vegetables",
      currentStock: 5,
      minStock: 8,
      unit: "kg",
      lastRestocked: "2024-01-12",
    },
    {
      id: 6,
      name: "Bell Peppers",
      category: "Vegetables",
      currentStock: 18,
      minStock: 10,
      unit: "kg",
      lastRestocked: "2024-01-15",
    },
    {
      id: 7,
      name: "Olives",
      category: "Vegetables",
      currentStock: 15,
      minStock: 8,
      unit: "kg",
      lastRestocked: "2024-01-14",
    },
    {
      id: 8,
      name: "Italian Sausage",
      category: "Meat",
      currentStock: 3,
      minStock: 8,
      unit: "kg",
      lastRestocked: "2024-01-10",
    },
    {
      id: 9,
      name: "Basil",
      category: "Herbs",
      currentStock: 22,
      minStock: 5,
      unit: "bunches",
      lastRestocked: "2024-01-15",
    },
    {
      id: 10,
      name: "Parmesan",
      category: "Cheese",
      currentStock: 20,
      minStock: 8,
      unit: "kg",
      lastRestocked: "2024-01-14",
    },
  ])

  const [filter, setFilter] = useState("all")

  const getStockStatus = (item) => {
    const percentage = (item.currentStock / item.minStock) * 100
    if (percentage <= 50) return "critical"
    if (percentage <= 100) return "low"
    return "good"
  }

  const filteredInventory = inventory.filter((item) => {
    const status = getStockStatus(item)
    if (filter === "low") return status === "critical" || status === "low"
    if (filter === "good") return status === "good"
    return true
  })

  const criticalCount = inventory.filter((item) => getStockStatus(item) === "critical").length
  const lowCount = inventory.filter((item) => getStockStatus(item) === "low").length
  const goodCount = inventory.filter((item) => getStockStatus(item) === "good").length

  return (
    <div className="grow">
      <div className="inventory-page">
        <div className="inventory-header">
          <div>
            <h1 className="page-title">Inventory Management</h1>
            <p className="page-subtitle">Monitor and manage your ingredient stock levels</p>
          </div>
          <button className="add-stock-btn">
            <FaPlus /> Add New Item
          </button>
        </div>

        {/* Stock Overview Cards */}
        <div className="stock-overview-cards">
          <div className="stock-overview-card critical">
            <div className="stock-overview-icon">
              <FaExclamationTriangle />
            </div>
            <div className="stock-overview-content">
              <div className="stock-overview-value">{criticalCount}</div>
              <div className="stock-overview-label">Critical Stock</div>
            </div>
          </div>

          <div className="stock-overview-card warning">
            <div className="stock-overview-icon">
              <FaBox />
            </div>
            <div className="stock-overview-content">
              <div className="stock-overview-value">{lowCount}</div>
              <div className="stock-overview-label">Low Stock</div>
            </div>
          </div>

          <div className="stock-overview-card success">
            <div className="stock-overview-icon">
              <FaCheckCircle />
            </div>
            <div className="stock-overview-content">
              <div className="stock-overview-value">{goodCount}</div>
              <div className="stock-overview-label">Good Stock</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="inventory-filters">
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            All Items ({inventory.length})
          </button>
          <button className={`filter-btn ${filter === "low" ? "active" : ""}`} onClick={() => setFilter("low")}>
            Needs Attention ({criticalCount + lowCount})
          </button>
          <button className={`filter-btn ${filter === "good" ? "active" : ""}`} onClick={() => setFilter("good")}>
            Well Stocked ({goodCount})
          </button>
        </div>

        {/* Inventory Table */}
        <div className="inventory-table-container">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Category</th>
                <th>Current Stock</th>
                <th>Min Stock</th>
                <th>Status</th>
                <th>Last Restocked</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => {
                const status = getStockStatus(item)
                return (
                  <tr key={item.id} className={`inventory-row ${status}`}>
                    <td className="item-name-cell">
                      <FaBox className="item-icon" />
                      {item.name}
                    </td>
                    <td>{item.category}</td>
                    <td className="stock-cell">
                      <span className="stock-value">
                        {item.currentStock} {item.unit}
                      </span>
                    </td>
                    <td>
                      {item.minStock} {item.unit}
                    </td>
                    <td>
                      <span className={`status-badge ${status}`}>
                        {status === "critical" && <FaExclamationTriangle />}
                        {status === "low" && <FaBox />}
                        {status === "good" && <FaCheckCircle />}
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </span>
                    </td>
                    <td className="date-cell">{new Date(item.lastRestocked).toLocaleDateString()}</td>
                    <td>
                      <button className="action-btn">
                        <MdEdit /> Update
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Inventory
