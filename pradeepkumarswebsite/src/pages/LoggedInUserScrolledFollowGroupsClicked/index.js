import React from "react";

import {
  Stack,
  Column,
  List,
  Image,
  Text,
  Row,
  Button,
  Line,
  Input,
  SelectBox,
} from "components";

const LoggedInUserScrolledFollowGroupsClickedPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
     <a href="/">
                <Button>Back to Home</Button>
              </a>
      <Stack className="bg-white_A700 font-ibmplexsans h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] mx-[auto] w-[100%]">
        <Stack className="absolute lg:h-[1330px] xl:h-[1521px] h-[1709px] 2xl:h-[1711px] 3xl:h-[2052px] w-[100%]">
          <Column className="absolute items-start justify-start left-[14%] w-[48%]">
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Column className="bg-white_A700 items-start justify-start lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] outline outline-[1px] outline-gray_300 lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] rounded-radius4 w-[100%]">
                <Column className="items-start w-[100%]">
                  <Image
                    src={"images/img_rectangle5_4.png"}
                    className="lg:h-[139px] xl:h-[159px] h-[178px] 2xl:h-[179px] 3xl:h-[214px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                    alt="Rectangle5"
                  />
                </Column>
                <Column className="items-start justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] w-[94%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    <span className="text-black_900 font-ibmplexsans font-medium">
                      ✍️{" "}
                    </span>
                    <span className="text-black_900 font-ibmplexsans font-medium">
                      Article
                    </span>
                  </Text>
                  <Column className="items-center xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text className="font-semibold leading-[134.17%] lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-black_900 text-left w-[93%]">
                        What if famous brands had regular fonts? Meet
                        RegulaBrands!
                      </Text>
                      <Image
                        src={"images/img_vector_17.png"}
                        className="h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mb-[31px] xl:mb-[36px] mb-[41px] 3xl:mb-[49px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain w-[3%]"
                        alt="Vector"
                      />
                    </Row>
                  </Column>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] text-[19px] 3xl:text-[22px] text-gray_700 w-[auto]">
                    I’ve worked in UX for the better part of a decade. From now
                    on, I plan to rei…
                  </Text>
                  <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <Image
                      src={"images/img_rectangle3_5.png"}
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain rounded-radius50 w-[auto]"
                      alt="Rectangle3"
                    />
                    <Text className="font-semibold lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                      Sarthak Kamra
                    </Text>
                    <Image
                      src={"images/img_iconactionvis_5.png"}
                      className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[227px] xl:ml-[259px] ml-[292px] 3xl:ml-[350px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[2%]"
                      alt="iconactionvis"
                    />
                    <Text className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                      1.4k views
                    </Text>
                    <Stack className="bg-bluegray_50 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius2 w-[6%]">
                      <Image
                        src={"images/img_vector_18.png"}
                        className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[93%]"
                        alt="Vector"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] outline outline-[1px] outline-gray_300 lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] rounded-radius4 w-[100%]">
                <Column className="items-start w-[100%]">
                  <Image
                    src={"images/img_rectangle5_5.png"}
                    className="lg:h-[172px] xl:h-[196px] h-[220px] 2xl:h-[221px] 3xl:h-[265px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                    alt="Rectangle5"
                  />
                </Column>
                <Column className="items-start justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] w-[94%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    <span className="text-black_900 font-ibmplexsans font-medium">
                      🔬️
                    </span>
                    <span className="text-black_900 font-ibmplexsans font-medium">
                      {" "}
                      Educatio
                    </span>
                    <span className="text-black_900 font-ibmplexsans">n</span>
                  </Text>
                  <Column className="items-center xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text className="font-semibold leading-[134.55%] lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-black_900 text-left w-[93%]">
                        Tax Benefits for Investment under National Pension
                        Scheme launched by Government
                      </Text>
                      <Image
                        src={"images/img_vector_19.png"}
                        className="h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mb-[31px] xl:mb-[36px] mb-[41px] 3xl:mb-[49px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain w-[3%]"
                        alt="Vector"
                      />
                    </Row>
                  </Column>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] text-[19px] 3xl:text-[22px] text-gray_700 w-[auto]">
                    I’ve worked in UX for the better part of a decade. From now
                    on, I plan to rei…
                  </Text>
                  <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <Image
                      src={"images/img_rectangle3_6.png"}
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain rounded-radius50 w-[auto]"
                      alt="Rectangle3"
                    />
                    <Text className="font-semibold lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                      Sarah West
                    </Text>
                    <Image
                      src={"images/img_iconactionvis_6.png"}
                      className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[249px] xl:ml-[285px] ml-[321px] 3xl:ml-[385px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[2%]"
                      alt="iconactionvis"
                    />
                    <Text className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                      1.4k views
                    </Text>
                    <Stack className="bg-bluegray_50 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius2 w-[6%]">
                      <Image
                        src={"images/img_vector_20.png"}
                        className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[93%]"
                        alt="Vector"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Column>
            </List>
            <Stack className="lg:h-[603px] xl:h-[690px] h-[775px] 2xl:h-[776px] 3xl:h-[931px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
              <Column className="absolute items-start justify-start w-[100%]">
                <Column className="bg-white_A700 items-start justify-start outline outline-[1px] outline-gray_300 lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] rounded-radius4 w-[100%]">
                  <Column className="items-start w-[100%]">
                    <Image
                      src={"images/img_rectangle5_6.png"}
                      className="lg:h-[172px] xl:h-[196px] h-[220px] 2xl:h-[221px] 3xl:h-[265px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                      alt="Rectangle5"
                    />
                  </Column>
                  <Column className="items-start justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] w-[94%]">
                    <Text className="font-normal lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                      <span className="text-black_900 font-ibmplexsans font-medium">
                        🗓️
                      </span>
                      <span className="text-black_900 font-ibmplexsans font-medium">
                        {" "}
                        Meetu
                      </span>
                      <span className="text-black_900 font-ibmplexsans">p</span>
                    </Text>
                    <Row className="items-center justify-between xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                      <Text className="font-semibold lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-black_900 w-[auto]">
                        Finance & Investment Elite Social Mixer @Lujiazui
                      </Text>
                      <Button className="bg-gray_400 flex lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mt-[1px] xl:p-[3px] lg:p-[3px] p-[4px] rotate-[-90deg] rounded-radius4 lg:w-[21px] xl:w-[24px] w-[28px] 3xl:w-[33px]">
                        <Image
                          src={"images/img_baselinemorev_1.png"}
                          className="w-[93%] flex items-center justify-center"
                          alt="baselinemorev"
                        />
                      </Button>
                    </Row>
                    <Stack className="h-[102px] 2xl:h-[103px] 3xl:h-[123px] lg:h-[80px] xl:h-[91px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]">
                      <Column className="absolute bg-white_A700 border-bluegray_200 border-bw07 border-solid bottom-[20%] items-center justify-start lg:px-[222px] xl:px-[254px] px-[286px] 3xl:px-[343px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius8 w-[100%]">
                        <Text className="font-semibold lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-deep_orange_A200 w-[auto]">
                          Visit Website
                        </Text>
                      </Column>
                      <Row className="absolute items-start justify-start left-[0] top-[8%] w-[54%]">
                        <Image
                          src={"images/img_vector_21.png"}
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] mt-[0] object-contain w-[4%]"
                          alt="Vector"
                        />
                        <Text className="font-medium lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                          Fri, 12 Oct, 2018
                        </Text>
                        <Image
                          src={"images/img_group_3.png"}
                          className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[0] lg:ml-[53px] xl:ml-[61px] ml-[69px] 3xl:ml-[82px] mt-[1px] object-contain w-[3%]"
                          alt="Group"
                        />
                        <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                          Ahmedabad, India
                        </Text>
                      </Row>
                      <Column className="absolute bg-white_A700 items-start justify-start xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius4 shadow-bs w-[25%]">
                        <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Edit
                        </Text>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Report
                        </Text>
                        <Text className="font-normal lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                          Option 3
                        </Text>
                      </Column>
                    </Stack>
                    <Row className="items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                      <Image
                        src={"images/img_rectangle3_7.png"}
                        className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain rounded-radius50 w-[auto]"
                        alt="Rectangle3"
                      />
                      <Text className="font-semibold lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                        Ronal Jones
                      </Text>
                      <Image
                        src={"images/img_iconactionvis_7.png"}
                        className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[245px] xl:ml-[280px] ml-[315px] 3xl:ml-[378px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[2%]"
                        alt="iconactionvis"
                      />
                      <Text className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        1.4k views
                      </Text>
                      <Stack className="bg-bluegray_50 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius2 w-[6%]">
                        <Image
                          src={"images/img_vector_22.png"}
                          className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[93%]"
                          alt="Vector"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-start justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] outline outline-[1px] outline-gray_300 lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius4 w-[100%]">
                  <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    💼️ Job
                  </Text>
                  <Column className="items-center lg:mr-[15px] xl:mr-[17px] mr-[20px] 3xl:mr-[24px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[97%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text className="font-semibold lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-black_900 w-[auto]">
                        Software Developer
                      </Text>
                      <Image
                        src={"images/img_vector_23.png"}
                        className="h-[4px] 3xl:h-[5px] 2xl:h-[5px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[3%]"
                        alt="Vector"
                      />
                    </Row>
                  </Column>
                  <Row className="items-start justify-start ml-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[59%]">
                    <Image
                      src={"images/img_vector_24.png"}
                      className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] xl:mb-[1px] lg:mb-[1px] mb-[2px] mt-[1px] object-contain w-[4%]"
                      alt="Vector"
                    />
                    <Text className="font-medium lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      Innovaccer Analytics Private Ltd.
                    </Text>
                    <Image
                      src={"images/img_group_4.png"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] my-[1px] object-contain w-[3%]"
                      alt="Group"
                    />
                    <Text className="font-medium mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      Noida, India
                    </Text>
                  </Row>
                  <Column className="items-center lg:mr-[15px] xl:mr-[17px] mr-[20px] 3xl:mr-[24px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[97%]">
                    <Column className="bg-white_A700 border-bluegray_200 border-bw07 border-solid items-center justify-start lg:px-[206px] xl:px-[236px] px-[266px] 3xl:px-[319px] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] rounded-radius10 w-[100%]">
                      <Text className="font-semibold lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-green_A700 w-[auto]">
                        Apply on Timesjobs
                      </Text>
                    </Column>
                    <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                      <Image
                        src={"images/img_rectangle3_8.png"}
                        className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain rounded-radius50 w-[auto]"
                        alt="Rectangle3"
                      />
                      <Text className="font-semibold lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                        Joseph Gray
                      </Text>
                      <Image
                        src={"images/img_iconactionvis_8.png"}
                        className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[243px] xl:ml-[278px] ml-[313px] 3xl:ml-[375px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[2%]"
                        alt="iconactionvis"
                      />
                      <Text className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                        1.4k views
                      </Text>
                      <Stack className="bg-bluegray_50 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius2 w-[6%]">
                        <Image
                          src={"images/img_vector_25.png"}
                          className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[93%]"
                          alt="Vector"
                        />
                      </Stack>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="absolute bg-white_A700 bottom-[10%] items-start justify-start outline outline-[1px] outline-gray_300 lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] rounded-radius4 w-[100%]">
                <Column className="items-start w-[100%]">
                  <Image
                    src={"images/img_rectangle5_7.png"}
                    className="lg:h-[172px] xl:h-[196px] h-[220px] 2xl:h-[221px] 3xl:h-[265px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                    alt="Rectangle5"
                  />
                </Column>
                <Column className="items-start justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] w-[94%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    <span className="text-black_900 font-ibmplexsans font-medium">
                      🗓️
                    </span>
                    <span className="text-black_900 font-ibmplexsans font-medium">
                      {" "}
                      Meetu
                    </span>
                    <span className="text-black_900 font-ibmplexsans">p</span>
                  </Text>
                  <Column className="items-center xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text className="font-semibold lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-black_900 w-[auto]">
                        Finance & Investment Elite Social Mixer @Lujiazui
                      </Text>
                      <Image
                        src={"images/img_vector_26.png"}
                        className="h-[4px] 3xl:h-[5px] 2xl:h-[5px] mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain w-[3%]"
                        alt="Vector"
                      />
                    </Row>
                  </Column>
                  <Row className="items-start justify-start xl:ml-[1px] lg:ml-[1px] ml-[2px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[54%]">
                    <Image
                      src={"images/img_vector_27.png"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] mt-[0] object-contain w-[4%]"
                      alt="Vector"
                    />
                    <Text className="font-medium lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      Fri, 12 Oct, 2018
                    </Text>
                    <Image
                      src={"images/img_group_5.png"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[0] lg:ml-[53px] xl:ml-[61px] ml-[69px] 3xl:ml-[82px] mt-[1px] object-contain w-[3%]"
                      alt="Group"
                    />
                    <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      Ahmedabad, India
                    </Text>
                  </Row>
                  <Button className="bg-white_A700 border-bluegray_200 border-bw07 border-solid font-semibold lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius8 lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-center text-deep_orange_A200 w-[100%]">
                    Visit Website
                  </Button>
                  <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <Image
                      src={"images/img_rectangle3_9.png"}
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain rounded-radius50 w-[auto]"
                      alt="Rectangle3"
                    />
                    <Text className="font-semibold lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                      Ronal Jones
                    </Text>
                    <Image
                      src={"images/img_iconactionvis_9.png"}
                      className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[308px] xl:ml-[353px] ml-[397px] 3xl:ml-[476px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[2%]"
                      alt="iconactionvis"
                    />
                    <Text className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                      1.4k views
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
          </Column>
          <header className="absolute top-[2%] w-[100%]">
            <Column className="bg-white_A700 items-start justify-end pb-[11px] 3xl:pb-[13px] lg:pb-[8px] xl:pb-[9px] lg:pl-[155px] xl:pl-[177px] pl-[200px] 3xl:pl-[240px] lg:pt-[48px] xl:pt-[55px] pt-[62px] 3xl:pt-[74px] w-[100%]">
              <Column className="items-center lg:mr-[155px] xl:mr-[177px] mr-[200px] 3xl:mr-[240px] w-[84%]">
                <Row className="items-start justify-start w-[100%]">
                  <Text className="cursor-pointer hover:font-medium font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                    All Posts(32)
                  </Text>
                  <Text className="cursor-pointer hover:font-medium font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-black_900 text-bluegray_400 w-[auto]">
                    Article
                  </Text>
                  <Text className="cursor-pointer hover:font-medium font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-black_900 text-bluegray_400 w-[auto]">
                    Event
                  </Text>
                  <Text className="cursor-pointer hover:font-medium font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-black_900 text-bluegray_400 w-[auto]">
                    Education
                  </Text>
                  <Text className="cursor-pointer hover:font-medium font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] hover:text-black_900 text-bluegray_400 w-[auto]">
                    Job
                  </Text>
                  <Row className="bg-gray_200 items-center justify-center lg:ml-[311px] xl:ml-[355px] ml-[400px] 3xl:ml-[480px] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] pb-[9px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[13%]">
                    <Text className="cursor-pointer hover:font-medium font-medium lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      Write a Post
                    </Text>
                    <Image
                      src={"images/img_vector_28.png"}
                      className="h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] object-contain w-[8%]"
                      alt="Vector"
                    />
                  </Row>
                  <Button
                    className="3xl:ml-[19px] 3xl:pl-[14px] 3xl:pr-[12px] 3xl:py-[9px] bg-white_A700 border-bw08 border-gray_500 border-solid flex items-center justify-between lg:ml-[12px] lg:pl-[9px] lg:pr-[7px] lg:py-[6px] ml-[16px] pl-[12px] pr-[10px] py-[8px] rounded-radius4 text-center w-[13%] xl:ml-[14px] xl:pl-[10px] xl:pr-[8px] xl:py-[7px]"
                    leftIcon={
                      <Image
                        src={"images/img_vector_29.png"}
                        className="w-[16.5px] h-[16.5px] text-center lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                        alt="Vector"
                      />
                    }
                  >
                    <div className="bg-transparent font-medium lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-gray_701">
                      Leave Group
                    </div>
                  </Button>
                </Row>
                <Line className="bg-gray_300 h-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
              </Column>
              <Line className="bg-black_900 h-[1px] w-[8%]" />
            </Column>
          </header>
        </Stack>
        <Row className="absolute bg-white_A700 items-center justify-start lg:pb-[10px] xl:pb-[12px] pb-[14px] 3xl:pb-[16px] lg:pl-[55px] xl:pl-[63px] pl-[71px] 3xl:pl-[85px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] shadow-bs1 w-[100%]">
          <Image
            src={"images/img_whole_1.png"}
            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain w-[12%]"
            alt="whole"
          />
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="bg-transparent border-0 font-medium p-[0] lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-gray_700 text-gray_700 w-[100%]"
            WrapClassName="3xl:ml-[366px] 3xl:pl-[20px] 3xl:pr-[26px] 3xl:py-[14px] bg-gray_100 flex lg:ml-[237px] lg:pl-[13px] lg:pr-[17px] lg:py-[9px] ml-[305px] pl-[17px] pr-[22px] py-[12px] rounded-radius21 w-[26%] xl:ml-[271px] xl:pl-[15px] xl:pr-[19px] xl:py-[10px]"
            name="Group29"
            placeholder="Search for your favorite groups in ATG"
            prefix={
              <Image
                src={"images/img_vector_30.png"}
                className="cursor-pointer w-[16.03px] h-[16.03px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                alt="Vector"
              />
            }
            suffix={
              inputvalue?.length > 0 ? (
                <Image
                  onClick={() => setInputvalue("")}
                  src={"images/close1.svg"}
                  className="cursor-pointer w-[16.03px] h-[16.03px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                  alt="Vector"
                />
              ) : (
                ""
              )
            }
          ></Input>
          <Image
            src={"images/img_rectangle6_5.png"}
            className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[126px] xl:ml-[144px] ml-[162px] 3xl:ml-[194px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain rounded-radius50 w-[auto]"
            alt="Rectangle6"
          />
          <SelectBox
            className="bg-transparent font-normal lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[9%]"
            placeholderClassName="bg-transparent text-black_900"
            name="Group31"
            placeholder="Siddharth Goyal"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Image
                src={"images/img_vector_31.png"}
                className="w-[9.17px] h-[4.58px] mr-[0] object-contain lg:w-[7px] lg:h-[4px] xl:w-[8px] xl:h-[5px] 2xl:w-[9px] 2xl:h-[5px] 3xl:w-[11px] 3xl:h-[6px]"
                alt="Vector"
              />
            }
          ></SelectBox>
        </Row>
        <Column className="absolute items-start justify-start right-[14%] top-[19%] w-[17%]">
          <Column className="items-center xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
            <Row className="items-center justify-end w-[100%]">
              <Image
                src={"images/img_outlinelocatio_1.png"}
                className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                alt="outlinelocatio"
              />
              <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                <span className="text-black_900 font-ibmplexsans">|</span>
                <span className="text-gray_600 font-ibmplexsans">
                  Enter your location
                </span>
              </Text>
              <Image
                src={"images/img_vector_32.png"}
                className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[63px] xl:ml-[72px] ml-[82px] 3xl:ml-[98px] xl:my-[2px] lg:my-[2px] my-[3px] object-contain w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                alt="Vector"
              />
            </Row>
          </Column>
          <Line className="bg-gray_401 h-[0.4px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]" />
          <Column className="items-center lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] pl-[1px] w-[100%]">
            <Row className="items-start justify-start w-[100%]">
              <Image
                src={"images/img_vector_33.png"}
                className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[10px] xl:w-[11px] w-[13px] 3xl:w-[15px]"
                alt="Vector"
              />
              <Text className="font-normal leading-[normal] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900_87 text-left w-[91%]">
                Your location will help us serve better and extend a
                personalised experience.
              </Text>
            </Row>
          </Column>
        </Column>
        <Text className="absolute font-normal right-[17%] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 top-[33%] tracking-ls1 uppercase w-[auto]">
          REcommended Groups
        </Text>
        <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[14%] w-[17%]">
          <Column className="items-start w-[100%]">
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Row className="items-center justify-start my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]">
                <Image
                  src={"images/img_rectangle6_6.png"}
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain rounded-radius50 w-[auto]"
                  alt="Rectangle6"
                />
                <Text className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Leisure
                </Text>
                <Button className="bg-black_900 font-normal lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] xl:py-[3px] lg:py-[3px] py-[4px] rounded-radius12 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 w-[30%]">
                  Followed
                </Button>
              </Row>
              <Row className="items-center justify-start my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]">
                <Image
                  src={"images/img_rectangle6_7.png"}
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain rounded-radius50 w-[auto]"
                  alt="Rectangle6"
                />
                <Text className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Activism
                </Text>
                <Button className="bg-bluegray_51 font-normal lg:ml-[59px] xl:ml-[68px] ml-[77px] 3xl:ml-[92px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] xl:py-[3px] lg:py-[3px] py-[4px] rounded-radius12 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 text-center w-[25%]">
                  Follow
                </Button>
              </Row>
              <Row className="items-center justify-start my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]">
                <Image
                  src={"images/img_rectangle6_8.png"}
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain rounded-radius50 w-[auto]"
                  alt="Rectangle6"
                />
                <Text className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  MBA
                </Text>
                <Button className="bg-bluegray_51 font-normal ml-[103px] 3xl:ml-[123px] lg:ml-[80px] xl:ml-[91px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] xl:py-[3px] lg:py-[3px] py-[4px] rounded-radius12 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 text-center w-[25%]">
                  Follow
                </Button>
              </Row>
              <Row className="items-center justify-start my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]">
                <Image
                  src={"images/img_rectangle6_9.png"}
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain rounded-radius50 w-[auto]"
                  alt="Rectangle6"
                />
                <Text className="font-normal xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Philosophy
                </Text>
                <Button className="bg-bluegray_51 font-normal lg:ml-[48px] xl:ml-[55px] ml-[62px] 3xl:ml-[74px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] xl:py-[3px] lg:py-[3px] py-[4px] rounded-radius12 xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 text-center w-[25%]">
                  Follow
                </Button>
              </Row>
            </List>
          </Column>
          <Text className="font-normal lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_A700 w-[auto]">
            See More...
          </Text>
        </Column>
        <Image
          src={"images/img_vector_34.png"}
          className="absolute h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] object-contain right-[30%] top-[34%] w-[1%]"
          alt="Vector"
        />
        <Image
          src={"images/img_vector_35.png"}
          className="absolute lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] object-contain right-[30%] top-[33%] w-[1%]"
          alt="Vector"
        />
      </Stack>
    </>
  );
};

export default LoggedInUserScrolledFollowGroupsClickedPage;
