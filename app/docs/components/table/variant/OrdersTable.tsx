'use client'
import Image from 'next/image'
import { Badge, Button, Popover, Table } from '~/src'
import {
  CalendarBlank,
  Crown,
  Cube,
  CurrencyDollar,
  DotsNine,
  DotsThreeOutline,
  Flag,
  Pencil,
  Spinner,
  Tag,
  Trash,
} from 'phosphor-react'

const OrdersTable = () => {
  return (
    <div className="scale-95">
      <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-metal-600 text-body-1 font-semibold">Orders</p>
            </div>
            <div className="flex items-center gap-5">
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Filter
              </Button>
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Search
              </Button>
            </div>
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[302px]">
            <p className="text-metal-400 text-body-6 font-medium">Order no.</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[165px]"
            icon={<CalendarBlank size={14} color="#8897AE" />}
            iconPosition="left">
            Date
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[124px]" icon={<Flag size={14} color="#8897AE" />} iconPosition="left">
            Country
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[152px]" icon={<Spinner size={14} color="#8897AE" />} iconPosition="left">
            State
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[114px]" icon={<DotsNine size={14} color="#8897AE" />} iconPosition="left">
            Quant.
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[138px]"
            icon={<CurrencyDollar size={14} color="#8897AE" />}
            iconPosition="left">
            Total Price
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[150px]" icon={<Tag size={14} color="#8897AE" />} iconPosition="left">
            Location
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-metal-500 text-body-4 font-medium">DL - 19266755</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">Jan 19, 2022</p>
              <p className="text-metal-500 text-body-6 font-normal">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image src="/images/icon/country-0.svg" alt="country" height="18" width="24" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge colorType="light" color="success" icon={<Crown size={18} weight="light" />} iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">3</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">$21,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">285 Great North Road, Grey Lynn.</p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }>
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-metal-500 text-body-4 font-medium">DL - 34233451</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">Jan 23, 2022</p>
              <p className="text-metal-500 text-body-6 font-normal">4:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image src="/images/icon/country-1.svg" alt="country" height="18" width="24" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge colorType="light" color="success" icon={<Crown size={18} weight="light" />} iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">6</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">$13,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">19 Great North Road, Grey Lynn</p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }>
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-metal-500 text-body-4 font-medium">DL - 19266567</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">Jan 31, 2022</p>
              <p className="text-metal-500 text-body-6 font-normal">5:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image src="/images/icon/country-2.svg" alt="country" height="18" width="24" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge colorType="light" color="gray" icon={<Crown size={18} weight="light" />} iconPosition="left">
                  Pending
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">8</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">$24,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">19 Great North Road, Grey Lynn</p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }>
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-metal-500 text-body-4 font-medium">DL - 19266755</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">Jan 19, 2022</p>
              <p className="text-metal-500 text-body-6 font-normal">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image src="/images/icon/country-5.svg" alt="country" height="18" width="24" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge colorType="light" color="success" icon={<Crown size={18} weight="light" />} iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">9</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">$82,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">686 Great South Road, Manukau</p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }>
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-metal-500 text-body-4 font-medium">DL - 19264155</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">Jan 07, 2022</p>
              <p className="text-metal-500 text-body-6 font-normal">02:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image src="/images/icon/country-4.svg" alt="country" height="18" width="24" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge colorType="light" color="gray" icon={<Crown size={18} weight="light" />} iconPosition="left">
                  Pending
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">3</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">$21,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">20 Poland Road, Wairau Valley</p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }>
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-metal-500 text-body-4 font-medium">DL - 19266755</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">Jan 19, 2022</p>
              <p className="text-metal-500 text-body-6 font-normal">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image src="/images/icon/country-5.svg" alt="country" height="18" width="24" />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge colorType="light" color="success" icon={<Crown size={18} weight="light" />} iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">3</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">$21,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-metal-500 text-body-5 font-medium">285 Great North Road, Grey Lynn.</p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 rounded px-2 py-1">
                      <button className="text-metal-600 flex w-full items-center justify-between text-body-4 font-normal">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }>
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

const OrdersTableCode = `
"use client";
import { Badge, Button, Popover, Table } from "keep-react";
import {
  CalendarBlank,
  Crown,
  Cube,
  CurrencyDollar,
  DotsNine,
  DotsThreeOutline,
  Flag,
  Pencil,
  Spinner,
  Tag,
  Trash,
} from "phosphor-react";
import Image from "next/image";

export const TableComponent = () => {
  return (
    <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Orders</p>
            </div>
            <div className="flex items-center gap-5">
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Filter
              </Button>
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Search
              </Button>
            </div>
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[302px]">
            <p className="text-body-6 font-medium text-metal-400">Order no.</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[165px]"
            icon={<CalendarBlank size={14} color="#8897AE" />}
            iconPosition="left"
          >
            Date
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[124px]"
            icon={<Flag size={14} color="#8897AE" />}
            iconPosition="left"
          >
            Country
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[152px]"
            icon={<Spinner size={14} color="#8897AE" />}
            iconPosition="left"
          >
            State
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[114px]"
            icon={<DotsNine size={14} color="#8897AE" />}
            iconPosition="left"
          >
            Quant.
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[138px]"
            icon={<CurrencyDollar size={14} color="#8897AE" />}
            iconPosition="left"
          >
            Total Price
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[150px]"
            icon={<Tag size={14} color="#8897AE" />}
            iconPosition="left"
          >
            Location
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-y divide-gray-25">
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">
                DL - 19266755
              </p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image
                src="/images/icon/country-0.svg"
                alt="country"
                height="18"
                width="24"
              />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">3</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$21,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">
                285 Great North Road, Grey Lynn.
              </p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">
                DL - 34233451
              </p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 23, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">4:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image
                src="/images/icon/country-1.svg"
                alt="country"
                height="18"
                width="24"
              />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">6</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$13,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">
                19 Great North Road, Grey Lynn
              </p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">
                DL - 19266567
              </p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 31, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">5:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image
                src="/images/icon/country-2.svg"
                alt="country"
                height="18"
                width="24"
              />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="gray"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Pending
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">8</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$24,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">
                19 Great North Road, Grey Lynn
              </p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">
                DL - 19266755
              </p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image
                src="/images/icon/country-5.svg"
                alt="country"
                height="18"
                width="24"
              />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">9</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$82,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">
                686 Great South Road, Manukau
              </p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">
                DL - 19264155
              </p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 07, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">02:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image
                src="/images/icon/country-4.svg"
                alt="country"
                height="18"
                width="24"
              />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="gray"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Pending
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">3</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$21,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">
                20 Poland Road, Wairau Valley
              </p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">
                DL - 19266755
              </p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Jan 19, 2022</p>
              <p className="text-body-6 font-normal text-metal-500">3:45 pm</p>
            </Table.Cell>
            <Table.Cell>
              <Image
                src="/images/icon/country-5.svg"
                alt="country"
                height="18"
                width="24"
              />
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">3</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">$21,000</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">
                285 Great North Road, Grey Lynn.
              </p>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                customClass="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
  );
}
`

export { OrdersTable, OrdersTableCode }
