/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Pie from 'react-native-pie';
import Slider from '@react-native-community/slider';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [loanAmount, setLoanAmount] = useState('5000000');
  const [interest, setInterest] = useState('7.5');
  const [tenureInMonth, setTenureInMonth] = useState('20');

  const maxLoanAmount = 20000000;
  const maxInterest = 20;
  const maxTenuew = 3
  const intr = Math.floor(interest) / 1200;
  const emi = Math.floor(tenureInMonth)
    ? Math.round(
        (Math.floor(loanAmount) * intr) /
          (1 - Math.pow(1 / (1 + intr), Math.floor(tenureInMonth))),
      )
    : 0;
  const totalAmnt = Math.floor(tenureInMonth) * emi;
  var TotalAmountOfCredit =
    Math.round(emi / intr) *
    (1 - Math.pow(1 + intr, Math.floor(-tenureInMonth)));
  const TotalAmountOfInterest = Math.round(totalAmnt - TotalAmountOfCredit);
  console.log('loanAmount>>>' + loanAmount);
  console.log('TotalAmountOfInterest>>>' + totalAmnt);
  const percentOfPricLoanAmount = (loanAmount / totalAmnt) * 100;
  const percentOfTotalInterest = 100 - percentOfPricLoanAmount;
  console.log('percentOfPricLoanAmount>>>' + percentOfPricLoanAmount);
  //console.log("percentOfTotalInterest>>>"+percentOfTotalInterest)

  return (
    <View style={{flex: 1, backgroundColor: '#EEEEEE', padding: 20}}>
      <View style={{flex: 0.5, backgroundColor: '#EEEEEE'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              paddingBottom: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 10,
              }}>
              <Text
                style={{fontSize: 20, color: 'black', alignItems: 'center'}}>
                Loan Amount
              </Text>
              <TextInput
                style={{
                  height: 50,
                  width: 150,
                  marginLeft: 20,
                  borderWidth: 1,
                  color: 'black',
                  fontSize: 20,
                }}
                value={loanAmount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                onChangeText={amnt =>
                  setLoanAmount(amnt.toString().replace(/,/g, ''))
                }
                color={'black'}
                keyboardType="numeric"
              />
              <Text
                style={{
                  fontSize: 20,
                  left: 10,
                  color: 'black',
                  alignItems: 'center',
                }}>
                ₹
              </Text>
            </View>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={maxLoanAmount}
              value={Math.floor(loanAmount)}
              minimumTrackTintColor="#ED8C2B"
              onValueChange={loanAmount =>0
                (Math.floor(loanAmount)) > maxLoanAmount
                  ? setLoanAmount(loanAmount.toString())
                  : setLoanAmount('5000000')
              }
              style={{width: '100%'}}
            />
          </View>

          <View style={{paddingBottom: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 10,
              }}>
              <Text
                style={{fontSize: 20, color: 'black', alignItems: 'center'}}>
                Interst Rate
              </Text>
              <TextInput
                style={{
                  height: 50,
                  width: 150,
                  marginLeft: 20,
                  borderWidth: 1,

                  fontSize: 20,
                }}
                value={interest}
                onChangeText={int => setInterest(intr.toString())}
                keyboardType="numeric"
              />
              <Text
                style={{
                  fontSize: 20,
                  left: 10,
                  color: 'black',
                  alignItems: 'center',
                }}>
                %
              </Text>
            </View>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={maxInterest}
              minimumTrackTintColor="#ED8C2B"
              value={Math.floor(interest)}
              onValueChange={intr => setInterest(intr.toString())}
              style={{width: '100%'}}
            />
          </View>

          <View style={{paddingBottom: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 10,
              }}>
              <Text
                style={{fontSize: 20, color: 'black', alignItems: 'center'}}>
                Loan Tenure
              </Text>
              <TextInput
                style={{
                  height: 50,
                  width: 150,
                  marginLeft: 20,
                  borderWidth: 1,

                  fontSize: 20,
                }}
                keyboardType="numeric"
                value={tenureInMonth}
                onChangeText={tenure => setTenureInMonth(tenure.toString())}
              />

              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 5,
                  color: 'black',
                  alignItems: 'center',
                }}>
                Mo
              </Text>
            </View>
            <Slider
              step={1}
              minimumValue={0}
              maximumValue={maxTenuew}
              minimumTrackTintColor="#ED8C2B"
              value={Math.floor(tenureInMonth)}
              onValueChange={tenure => setTenureInMonth(tenure.toString())}
              style={{width: '100%'}}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 0.5, borderColor: 'black', borderWidth: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 0.4}}>
            <View
              style={{
                flex: 1,

                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flex: 0.3,

                  borderColor: 'black',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    alignContent: 'center',
                    justifyContent: 'center',
                    opacity: 0.5,
                  }}>
                  Loan EMI
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    alignContent: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                  }}>
                  {'₹ ' + emi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.3,

                  justifyContent: 'center',
                  borderColor: 'black',
                  borderWidth: 1,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    alignContent: 'center',
                    justifyContent: 'center',
                    opacity: 0.5,
                  }}>
                  Total Interest Payable
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    alignContent: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                  }}>
                  {'₹ ' +
                    TotalAmountOfInterest.toString().replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ',',
                    )}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.3,

                  justifyContent: 'center',
                  borderColor: 'black',
                  borderWidth: 1,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    alignContent: 'center',
                    justifyContent: 'center',
                    opacity: 0.5,
                  }}>
                  Total Payment
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'black',
                    alignContent: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                  }}>
                  {'₹ ' +
                    totalAmnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.6,
              alignItems: 'center',
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              Break-up of Total Payment
            </Text>
            <View style={{marginTop: 20}}>
              <Pie
                radius={80}
                sections={[
                  {percentage: percentOfPricLoanAmount, color: '#C70039'},
                  {percentage: percentOfTotalInterest, color: '#EBD22F'},
                ]}
                strokeCap={'butt'}
                innerRadius={60}
                dividerSize={6}
              />

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingTop: 15,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 30, color: '#C70039', padding: 5}}>
                    {'\u2022'}
                  </Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>
                    Principal Loan Amount
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 30, color: '#EBD22F', padding: 5}}>
                    {'\u2022'}
                  </Text>
                  <Text style={{flex: 1, paddingLeft: 5}}>Total Interest</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
