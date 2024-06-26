import { ReqResClient } from '../clients/reqres-client';
import { colors } from '../fixtures/colors';
import { headers, jsonContentType } from '../fixtures/constants';
import { ColorList, SingleColor } from '../types/colors';

let reqResClient: ReqResClient;

describe('ReqRes API Colors endpoints', () => {
  beforeAll(() => {
    reqResClient = new ReqResClient();
  });

  test('GET to /colors should return status 200 and a list of colors', async () => {
    // Arrange
    const expectedResponse: ColorList = colors;

    // Act
    const response = await reqResClient.getColors();

    // Assert
    expect(response.status).toBe(200);
    expect(response.headers[headers.contentType]).toBe(jsonContentType);
    expect(response.data).toMatchObject(expectedResponse);
  });

  test('GET to /colors/id for an existing color should return status 200 and the color data', async () => {
    // Arrange
    const expectedResponse: SingleColor = {
      data: {
        id: 2,
        name: 'fuchsia rose',
        year: 2001,
        color: '#C74375',
        pantone_value: '17-2031',
      },
    };

    // Act
    const response = await reqResClient.getSingleColor(
      expectedResponse.data.id
    );

    // Assert
    expect(response.status).toBe(200);
    expect(response.headers[headers.contentType]).toBe(jsonContentType);
    expect(response.data).toMatchObject(expectedResponse);
  });

  test('GET to /colors/id for a color that does not exist should return status 404', async () => {
    // Arrange
    const nonexistentId = 23;

    // Act
    const response = await reqResClient.getSingleColor(nonexistentId);

    // Assert
    expect(response.status).toBe(404);
    expect(response.headers[headers.contentType]).toBe(jsonContentType);
    expect(response.data).toEqual({});
  });
});
