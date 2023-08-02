export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">{`Out of ${numItems} items, ${packedItems} are packed, ${
      numItems && (packedItems / numItems) * 100
    }%`}</footer>
  );
}
