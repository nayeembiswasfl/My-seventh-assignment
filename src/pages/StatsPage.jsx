import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { getTimelineEntries } from '../utils/interactionStorage';

const chartConfig = [
  { type: 'text', label: 'Text', color: '#7c3aed' },
  { type: 'call', label: 'Call', color: '#235746' },
  { type: 'video', label: 'Video', color: '#39a760' },
];

function StatsPage() {
  const timelineEntries = getTimelineEntries();
  const chartData = chartConfig.map((item) => ({
    ...item,
    value: timelineEntries.filter((entry) => entry.type === item.type).length,
  }));

  return (
    <section className="content-shell py-10 sm:py-16">
      <div className="max-w-[1120px]">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
          Friendship Analytics
        </h1>

        <article className="mt-10 rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm sm:px-8 sm:py-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#2d5d50]">By Interaction Type</h2>

          <div className="mt-4 h-[340px] w-full sm:h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="label"
                  cx="50%"
                  cy="48%"
                  innerRadius={72}
                  outerRadius={116}
                  paddingAngle={4}
                  cornerRadius={12}
                  stroke="#ffffff"
                  strokeWidth={8}
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.type} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value} interactions`, name]}
                  contentStyle={{
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-6 text-base font-medium text-[#637391]">
            {chartData.map((item) => (
              <div key={item.type} className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default StatsPage;
