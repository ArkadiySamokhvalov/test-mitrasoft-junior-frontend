import Card from "react-bootstrap/Card";

export const App = () => {
  return (
    <Card>
      <Card.Text>Здесь будет жить моё приложение!</Card.Text>
      <Card.Text className="text-muted">Не прям здесь. Где-то поблизости.</Card.Text>
    </Card>
  );
};
