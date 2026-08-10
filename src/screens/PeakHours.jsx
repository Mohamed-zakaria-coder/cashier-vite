import { FaClock, FaArrowUp, FaCalendarAlt } from "react-icons/fa"

const PeakHours = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM"]

  // Simulated heatmap data (0-100 representing order volume)
  const heatmapData = [
    [10, 15, 20, 45, 65, 85, 70, 55, 40, 60, 75, 90, 85, 70], // Monday
    [12, 18, 25, 50, 70, 88, 75, 60, 45, 65, 80, 92, 88, 72], // Tuesday
    [15, 20, 28, 55, 75, 90, 80, 65, 50, 70, 85, 95, 90, 75], // Wednesday
    [18, 22, 30, 60, 80, 92, 85, 70, 55, 75, 88, 98, 92, 78], // Thursday
    [20, 25, 35, 65, 85, 95, 90, 75, 60, 80, 92, 100, 95, 82], // Friday
    [25, 30, 40, 70, 90, 98, 95, 80, 65, 85, 95, 100, 98, 85], // Saturday
    [15, 20, 30, 55, 75, 88, 80, 65, 50, 70, 85, 92, 88, 72], // Sunday
  ]

  const getHeatColor = (value) => {
    if (value >= 90) return "#dc2626" // Dark red
    if (value >= 75) return "#ef4444" // Red
    if (value >= 60) return "#f97316" // Orange
    if (value >= 45) return "#fbbf24" // Yellow
    if (value >= 30) return "#a3e635" // Light green
    if (value >= 15) return "#86efac" // Very light green
    return "#e5e7eb" // Gray
  }

  const peakInsights = [
    { time: "Friday 8PM - 9PM", orders: 156, revenue: "$2,340", icon: <FaArrowUp /> },
    { time: "Saturday 8PM - 9PM", orders: 152, revenue: "$2,280", icon: <FaArrowUp /> },
    { time: "Thursday 8PM - 9PM", orders: 145, revenue: "$2,175", icon: <FaArrowUp /> },
  ]

  const recommendations = [
    "Staff 2 additional employees during Friday-Saturday 7PM-10PM",
    "Prepare extra dough on Thursday-Saturday afternoons",
    "Consider lunch specials to boost 12PM-2PM weekday traffic",
    "Weekend evenings generate 40% of weekly revenue",
  ]

  return (
    <div className="grow">
      <div className="peak-hours-page">
        <div className="peak-hours-header">
          <div>
            <h1 className="page-title">Peak Hours Analytics</h1>
            <p className="page-subtitle">Visualize your busiest times and optimize operations</p>
          </div>
          <div className="date-range-selector">
            <FaCalendarAlt />
            <select className="date-range-select">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
            </select>
          </div>
        </div>

        {/* Top Peak Times */}
        <div className="peak-insights-section">
          <h2 className="section-title">Top Peak Times</h2>
          <div className="peak-insights-grid">
            {peakInsights.map((insight, index) => (
              <div key={index} className="peak-insight-card">
                <div className="peak-insight-icon">{insight.icon}</div>
                <div className="peak-insight-content">
                  <div className="peak-insight-time">{insight.time}</div>
                  <div className="peak-insight-stats">
                    <span className="peak-stat">{insight.orders} orders</span>
                    <span className="peak-divider">•</span>
                    <span className="peak-stat">{insight.revenue}</span>
                  </div>
                </div>
                <div className="peak-rank">#{index + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Heatmap */}
        <div className="heatmap-section">
          <h2 className="section-title">
            <FaClock /> Weekly Order Volume Heatmap
          </h2>
          <div className="heatmap-container">
            <div className="heatmap-grid">
              <div className="heatmap-y-axis">
                {days.map((day) => (
                  <div key={day} className="heatmap-y-label">
                    {day}
                  </div>
                ))}
              </div>
              <div className="heatmap-content">
                <div className="heatmap-x-axis">
                  {hours.map((hour) => (
                    <div key={hour} className="heatmap-x-label">
                      {hour}
                    </div>
                  ))}
                </div>
                <div className="heatmap-cells">
                  {heatmapData.map((dayData, dayIndex) => (
                    <div key={dayIndex} className="heatmap-row">
                      {dayData.map((value, hourIndex) => (
                        <div
                          key={hourIndex}
                          className="heatmap-cell"
                          style={{ backgroundColor: getHeatColor(value) }}
                          title={`${days[dayIndex]} ${hours[hourIndex]}: ${value} orders`}
                        >
                          <span className="heatmap-cell-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="heatmap-legend">
              <span className="legend-label">Low</span>
              <div className="legend-gradient"></div>
              <span className="legend-label">High</span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="recommendations-section">
          <h2 className="section-title">Smart Recommendations</h2>
          <div className="recommendations-grid">
            {recommendations.map((rec, index) => (
              <div key={index} className="recommendation-card">
                <div className="recommendation-number">{index + 1}</div>
                <div className="recommendation-text">{rec}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeakHours
