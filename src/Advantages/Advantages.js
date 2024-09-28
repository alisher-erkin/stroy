import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Advantages.css";


export default class Advantages extends Component {
  render() {
    return (
      <div className='font-roboto'>
        <Container className='about-items'>
            <Row>
            <h3>Преимущества нашей компании</h3>
            <Col className='col-sm-4'>
            <Card>
            <Card.Img variant="top" src="img/contract.png" alt="contract"  className='img-fluid'/>
            <Card.Body>
                <Card.Title>Договор</Card.Title>
                <Card.Text>
                Договор на ремонт квартиры. Условия договора. Обяззанности сторон.
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            <Col className='col-sm-4'>
              <Card>
              <Card.Img variant="top" src="img/design.png" alt="design" className='img-fluid' />
              <Card.Body>
                  <Card.Title>Дизайн</Card.Title>
                  <Card.Text>
                  Дизайн проект с 3D визулизацией и коммнуникационными чертежами.
                  </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            <Col className='col-sm-4'>
              <Card>
              <Card.Img variant="top" src="img/worker.png" alt="worker" className='img-fluid' />
              <Card.Body>
                  <Card.Title>Опытные мастера</Card.Title>
                  <Card.Text>
                  Бригада мастеров имеющих многолетний опыт работы.
                  </Card.Text>
              </Card.Body>
              </Card>
            </Col>
            </Row>
            <Row>
              <Col className='col-sm-4'>
              <Card>
              <Card.Img variant="top" src="img/planning.png" alt="planning" className='img-fluid' />
              <Card.Body>
                  <Card.Title>Планирование</Card.Title>
                  <Card.Text>
                  Грамотное планирование с учетом предпочтений Закзачика.
                  </Card.Text>
              </Card.Body>
              </Card>
              </Col>
              <Col className='col-sm-4'>
                <Card>
                <Card.Img variant="top" src="img/calendar.png" alt="calendar" className='img-fluid' />
                <Card.Body>
                    <Card.Title>Сроки</Card.Title>
                    <Card.Text>
                    Соблюденние и выполнение сроков строительства.
                    </Card.Text>
                </Card.Body>
                </Card>
              </Col>
              <Col className='col-sm-4'>
                <Card>
                <Card.Img variant="top" src="img/help.png" alt="help" className='img-fluid' />
                <Card.Body>
                    <Card.Title>Помощь</Card.Title>
                    <Card.Text>
                    Квалифицированная помощь в процессе работы.
                    </Card.Text>
                </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className='list-items justify-content-center'>
              <Col className='col-lg-5 col-md-7'>
              <h3 className='title-items'>Порядок работы</h3>
                <li>Телефонный звонок</li>
                <li>Составление сметы по проекту</li>
                <li>Обсуждение и корректировка договора</li>
                <li>Заключение договора</li>
                <li>Выезд на объект и поставка материалов </li>
                <li>Поэтапное выполнение работ</li>
                <li>Поэтапная оплата выполненных работ</li>
                <li>Финальная уборка помещения</li>
                <li>Подписание заключительного акта</li>
              </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
